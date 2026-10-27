const { Console } = require('console');
const express = require('express');
const cron = require('node-cron');
const { Boom } = require('@hapi/boom');
const http = require('http');
const pino = require('pino');
const fs = require('fs');
const path = require('path');
const NodeCache = require('node-cache');
const axios = require('axios');
const simpleGit = require('simple-git');

const { 
    makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    Browsers, 
    makeInMemoryStore, 
    makeCacheableSignalKeyStore, 
    fetchLatestBaileysVersion 
} = require('baileys');

const config = require('./config');
const { 
    serialize, 
    commands, 
    whatsappAutomation, 
    callAutomation, 
    externalPlugins 
} = require('./lib');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async function Sparky() {
    const app = express();
    const PORT = process.env.PORT || 3000;
    const groupCache = new NodeCache({ stdTTL: 3600, checkperiod: 600, useClones: false, deleteOnExpire: true, maxKeys: 500 });
    const logger = pino({ level: 'silent' });

    app.get('/', (req, res) => {
        res.json({ status: 'Active', bot: 'RAHUL-AI-BOT' });
    });

    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log('Web server running on port: ', PORT);
    });

    let platform = process.env.RENDER ? 'RENDER' : process.env.HEROKU ? 'HEROKU' : process.env.KOYEB_APP_ID ? 'KOYEB' : 'VPS';
    console.log('Running on platform: ', platform);

    if (!fs.existsSync('./lib/session')) {
        fs.mkdirSync('./lib/session', { recursive: true });
    }

    try {
        if (!config.SESSION_ID) throw new Error('Session ID missing');
        const sessionData = await axios.get('https://gist.github.com/ESWIN-SPERKY/' + config.SESSION_ID.split(':')[1] + '/raw');
        
        Object.keys(sessionData.data).forEach(filename => {
            fs.writeFileSync('./lib/session/' + filename, sessionData.data[filename], 'utf8');
        });
        console.log('Session connected and session files saved.');
    } catch (err) {
        console.error('Error:', err.message);
    }

    const { state, saveCreds } = await useMultiFileAuthState('./lib/session');
    const { version } = await fetchLatestBaileysVersion();
    
    const client = makeWASocket({
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, logger)
        },
        downloadHistory: false,
        syncFullHistory: false,
        shouldSyncHistoryMessage: () => false,
        printQRInTerminal: false,
        version,
        logger,
        getMessage: false,
        cachedGroupMetadata: async (jid) => groupCache.get(jid)
    });

    const ownerJid = (config.SUDO !== '' ? config.SUDO.split(',')[0] : client.user.id.split(':')[0]) + '@s.whatsapp.net';

    try {
        await config.DATABASE.sync;
        console.log('Database synced.');
    } catch (err) {
        console.error('Error while syncing database:', err);
    }

    async function loadExternalPlugins() {
        try {
            let pluginsList = await externalPlugins.findAll();
            pluginsList.map(async plugin => {
                if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                    var res = await axios.get(plugin.dataValues.url);
                    if (res.statusCode == 200) {
                        console.log('Installing external plugins...');
                        fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', res.data);
                        require('./plugins/' + plugin.dataValues.name + '.js');
                        console.log('External plugins loaded successfully.');
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    client.ev.on('connection.update', async ({ connection, lastDisconnect }) => {
        if (connection === 'connecting') {
            console.log('Connecting...');
        } else if (connection === 'open') {
            await loadExternalPlugins();
            console.log('Connected.');

            fs.readdirSync('./plugins')
                .filter(file => path.extname(file) === '.js')
                .forEach(file => require('./plugins/' + file));

            const botPrefix = config.PREFIX || config.HANDLERS || '.';
            const botVersion = config.VERSION || '3.7.0';
            const botWorkType = config.WORK_TYPE || 'public';
            const menuType = config.MENU_TYPE || 'image';
            const botLang = config.LANGUAGE || 'english';

            var startMessage = '╔══════════════════════╗\n' +
                '║   ✨ *RAHUL AI BOT* ✨   ║\n' +
                '╚══════════════════════╝\n\n' +
                '🚀 *Status:* Online & Active\n' +
                '👑 *Owner Mode:* Secured\n\n' +
                '📌 *Configurations:*\n' +
                '┏ Z Mode: ' + botWorkType + '\n' +
                '┣ Z Prefix: ' + botPrefix + '\n' +
                '┣ Z Version: ' + botVersion + '\n' +
                '┣ Z Menu: ' + menuType + '\n' +
                '┗ Z Lang: ' + botLang + '\n\n' +
                '⚡ *Extra Features:*\n' +
                '• Always Online: ' + (config.ALWAYS_ONLINE ? '✔️' : '❌') + '\n' +
                '• Auto Status View: ' + (config.AUTO_STATUS_VIEW ? '✔️' : '❌') + '\n' +
                '• Auto Call Blocker: ' + (config.REJECT_CALLS ? '✔️' : '❌') + '\n\n' +
                '_Bot has been deployed successfully!_';
            
            if (config.START_MSG !== false) {
                return await client.sendMessage(ownerJid, { 
                    text: startMessage,
                    contextInfo: {
                        externalAdReply: {
                            title: 'RAHUL AI BOT IS LIVE',
                            body: 'Tap to open dashboard',
                            sourceUrl: '',
                            mediaUrl: '',
                            mediaType: 1,
                            showAdAttribution: false,
                            renderLargerThumbnail: true,
                            thumbnailUrl: 'https://i.ibb.co/d454zyhy/upload-1778297794251-e23a560b-jpg.jpg'
                        }
                    }
                }, { quoted: false });
            }
        } else if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.connectionReplaced) {
                console.log('Connection replaced. Logout current session first.');
                await client.logout();
            } else {
                console.log('Reconnecting...');
                await sleep(3000);
            }
        }
    });

    client.ev.on('messages.upsert', async m => {
        let msg;
        try {
            msg = await serialize(JSON.parse(JSON.stringify(m.messages[0])), client);
        } catch(err) {
            console.error('Error serializing message:', err);
            return;
        }

        await whatsappAutomation(client, msg, m);

        if (!msg.body) return;

        commands.forEach(async cmd => {
            if (cmd.sudo && !msg.fromMe) return;

            let text = msg.body.trim();
            let args;
            try {
                if (typeof cmd.on === 'function') {
                    cmd.on({ 'm': msg, 'args': text, 'client': client });
                } else if (cmd.pattern) {
                    // Support both prefix and prefix-less command triggering
                    let patternStr = cmd.pattern.source;
                    let cleanPatternStr = patternStr.replace(/^[\\\/\\^]+/, '').replace(/\\b/g, '');
                    let matchedWithoutPrefix = new RegExp('^' + cleanPatternStr, 'i').test(text);
                    
                    if (cmd.pattern.test(text) || matchedWithoutPrefix) {
                        args = text.replace(cmd.pattern, '$1').trim();
                        cmd.function({ 'm': msg, 'args': args, 'client': client });
                    }
                }
            } catch (err) {
                console.log(err);
            }
        });
    });

    client.ev.on('creds.update', saveCreds);

    client.ev.on('call', async calls => {
        for (let call of calls) {
            await callAutomation(client, call);
        }
    });

}()).catch(err => {
    console.error('Error:', err.message);
});
