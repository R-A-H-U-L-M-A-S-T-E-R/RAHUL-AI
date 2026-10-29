const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require('baileys');
const pino = require('pino');
const fs = require('fs');
const path = require('path');
const { Boom } = require('@hapi/boom');
const express = require('express');
const axios = require('axios');
const { serialize, commands, whatsappAutomation, callAutomation, externalPlugins } = require('./lib');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ status: 'Active', bot: 'RAHUL AI BOT' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

async function startBot() {
    console.log("Connecting Rahul AI Bot...");
    
    if (!fs.existsSync('./lib/session')) {
        fs.mkdirSync('./lib/session', { recursive: true });
    }

    try {
        if (config.SESSION_ID && config.SESSION_ID !== '') {
            console.log("Processing Session ID...");
            let rawSession = config.SESSION_ID.trim();
            if (rawSession.includes(':')) {
                const parts = rawSession.split(':');
                console.log("Fetching session from Gist ID: " + parts[1]);
                const gistUrl = `https://gist.github.com/ESWIN-SPERKY/${parts[1]}/raw`;
                const sessionRes = await axios.get(gistUrl);
                let sessionData = sessionRes.data;
                if (typeof sessionData === 'string') {
                    sessionData = JSON.parse(sessionData);
                }
                const credsKey = Object.keys(sessionData).find(k => k.includes('creds'));
                if (credsKey) {
                    fs.writeFileSync('./lib/session/creds.json', JSON.stringify(sessionData[credsKey], null, 2), 'utf8');
                    console.log("creds.json saved successfully.");
                } else {
                    Object.keys(sessionData).forEach(filename => {
                        fs.writeFileSync('./lib/session/' + filename, JSON.stringify(sessionData[filename], null, 2), 'utf8');
                    });
                    console.log("All session files saved successfully.");
                }
            }
        }
    } catch (err) {
        console.error("Session download error details:", err.message);
    }

    const { state, saveCreds } = await useMultiFileAuthState('./lib/session');
    const { version } = await fetchLatestBaileysVersion();

    const client = makeWASocket({
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.creds, pino({ level: 'silent' }))
        },
        printQRInTerminal: false,
        version,
        logger: pino({ level: 'silent' })
    });

    let isStarted = false;

    client.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        
        if (connection === 'open') {
            if (isStarted) return;
            isStarted = true;
            console.log("Connected to WhatsApp successfully!");

            const startMessage = `━━━━━━━━━━━━━━━━━━\n` +
                `✨ *RAHUL AI BOT ACTIVATED* ✨\n` +
                `━━━━━━━━━━━━━━━━━━\n\n` +
                `📌 *Mode* : ${config.WORK_TYPE || 'public'}\n` +
                `⚙️ *Prefix* : ${config.PREFIX || 'false'}\n` +
                `📦 *Version* : ${config.VERSION || '3.7.0'}\n` +
                `🛠️ *Menu Type* : ${config.MENU_TYPE || 'text'}\n` +
                `🌐 *Language* : ${config.LANGUAGE || 'english'}\n\n` +
                `⚡ *SYSTEM STATUS* ⚡\n\n` +
                `• Always Online : ${config.ALWAYS_ONLINE ? '✅' : '❌'}\n` +
                `• Auto Status View : ${config.AUTO_STATUS_VIEW ? '✅' : '❌'}\n` +
                `• Auto Reject Calls : ${config.REJECT_CALLS ? '✅' : '❌'}\n` +
                `• Auto Read Msgs : ${config.READ_MESSAGES ? '✅' : '❌'}\n` +
                `• Auto Call Blocker : ${config.CALL_BLOCK ? '✅' : '❌'}\n` +
                `• Auto Status Save : ${config.SAVE_STATUS ? '✅' : '❌'}\n` +
                `• Auto Status Reply : ${config.STATUS_REPLY ? '✅' : '❌'}\n` +
                `• Status Reaction : ${config.STATUS_REACTION ? '✅' : '❌'}\n` +
                `• Auto DL : ${config.AUTODL ? '✅' : '❌'}\n` +
                `• Logs : ${config.LOGS ? '✅' : '❌'}\n` +
                `• PM Blocker : ${config.PM_BLOCK ? '✅' : '❌'}\n` +
                `• PM Disabler : ${config.DISABLE_PM ? '✅' : '❌'}\n\n` +
                `━━━━━━━━━━━━━━━━━━\n` +
                `🔥 *POWERED BY RAHUL AI* 🔥\n` +
                `━━━━━━━━━━━━━━━━━━`;

            const ownerNumber = (config.SUDO && config.SUDO !== '' ? config.SUDO.split(',')[0] : (client.user?.id ? client.user.id.split(':')[0] : '919356730236')) + '@s.whatsapp.net';
            
            try {
                await client.sendMessage(ownerNumber, { text: startMessage });
                console.log("Start message sent successfully to owner!");
            } catch (e) {
                console.error("Failed to send start message:", e);
            }

            try {
                fs.readdirSync('./plugins').filter(file => path.extname(file) === '.js').forEach(file => {
                    require('./plugins/' + file);
                });
            } catch (pluginErr) {
                console.log("Plugins load error:", pluginErr);
            }

        } else if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.log(`Connection closed with reason code:`, reason);
            if (reason === DisconnectReason.connectionReplaced) {
                console.log('Connection replaced. Logout current session first.');
                await client.logout();
            } else {
                console.log('Reconnecting in 5 seconds...');
                setTimeout(startBot, 5000);
            }
        }
    });

    client.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            let mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek = await serialize(JSON.parse(JSON.stringify(mek)), client);
            await whatsappAutomation(client, mek, chatUpdate);

            if (config.READ_MESSAGES && !mek.fromMe) return;

            commands.forEach(async (command) => {
                if (command.sudo && !mek.fromMe) return;
                let text = mek.body ? mek.body[0].toLowerCase() + mek.body.slice(1).trim() : '';
                try {
                    if (command.on) {
                        command.function({ m: mek, args: mek.body, client });
                    } else if (command.pattern && command.pattern.test(text)) {
                        let match = mek.body.replace(command.pattern, '$1').trim();
                        command.function({ m: mek, args: match, client });
                    }
                } catch (err) {
                    console.log(err);
                }
            });
        } catch (e) {
            console.error('Error serializing message:', e);
        }
    });

    client.ev.on('creds.update', saveCreds);
    
    client.ev.on('call', async (callLogs) => {
        for (let call of callLogs) {
            await callAutomation(client, call);
        }
    });
}

startBot();
