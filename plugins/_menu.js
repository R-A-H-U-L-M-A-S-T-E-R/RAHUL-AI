const {
    Sparky,
    commands,
    isPublic
} = require("../lib");
const {
    getBuffer
} = require("./pluginsCore");
const plugins = require("../lib");
const config = require("../config.js");
const font = require("@viper-x/fancytext");
const menust = config.MENU_FONT;
const style = font[menust];
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const _0x3471ce=_0x4c73;function _0x5149(){const _0x99704b=['HEROKU','PITCHER_API_BASE_URL','PWD','codesandbox','1460490jcYrnC','DIGITALOCEAN','REPLIT','13089848qhFTfM','CLOUDFLARE','GITHUB','TERMUX_VERSION','REPLIT_USER','env','32199750KLjfkJ','18wOomgQ','5701444PXyScu','AZURE','7366gnnTKS','846315zOxTke','RAILWAY','NETLIFY','VPS','AWS','GITHUB_SERVER_URL','DYNO','1131GsaKWJ','SPACE_ID','HUGGINGFACE','KOYEB','CODESANDBOX','RENDER','FLY_IO','5671732abHOue','AZURE_HTTP_FUNCTIONS','DIGITALOCEAN_APP_NAME','CF_PAGES','VERCEL','LINUX','userland'];_0x5149=function(){return _0x99704b;};return _0x5149();}(function(_0x14bc52,_0x9e047e){const _0x5ac994=_0x4c73,_0x256c17=_0x14bc52();while(!![]){try{const _0x1155d4=parseInt(_0x5ac994(0x14a))/0x1+parseInt(_0x5ac994(0x130))/0x2*(-parseInt(_0x5ac994(0x138))/0x3)+parseInt(_0x5ac994(0x13f))/0x4+parseInt(_0x5ac994(0x131))/0x5*(parseInt(_0x5ac994(0x12d))/0x6)+parseInt(_0x5ac994(0x12e))/0x7+parseInt(_0x5ac994(0x126))/0x8+-parseInt(_0x5ac994(0x12c))/0x9;if(_0x1155d4===_0x9e047e)break;else _0x256c17['push'](_0x256c17['shift']());}catch(_0x5dbaeb){_0x256c17['push'](_0x256c17['shift']());}}}(_0x5149,0xd4926));function _0x4c73(_0x3c6eb7,_0x511653){const _0x514924=_0x5149();return _0x4c73=function(_0x4c737c,_0x3e9250){_0x4c737c=_0x4c737c-0x125;let _0x40d9b6=_0x514924[_0x4c737c];return _0x40d9b6;},_0x4c73(_0x3c6eb7,_0x511653);}let SERVER=process[_0x3471ce(0x12b)][_0x3471ce(0x148)]?.['includes'](_0x3471ce(0x145))?_0x3471ce(0x144):process[_0x3471ce(0x12b)][_0x3471ce(0x147)]?.['includes'](_0x3471ce(0x149))?_0x3471ce(0x13c):process['env'][_0x3471ce(0x12a)]?_0x3471ce(0x125):process[_0x3471ce(0x12b)][_0x3471ce(0x135)]?_0x3471ce(0x135):process['env'][_0x3471ce(0x129)]?'TERMUX':process['env'][_0x3471ce(0x137)]?_0x3471ce(0x146):process[_0x3471ce(0x12b)][_0x3471ce(0x13b)]?_0x3471ce(0x13b):process[_0x3471ce(0x12b)][_0x3471ce(0x136)]?_0x3471ce(0x128):process['env']['RENDER']?_0x3471ce(0x13d):process[_0x3471ce(0x12b)][_0x3471ce(0x132)]?_0x3471ce(0x132):process[_0x3471ce(0x12b)][_0x3471ce(0x143)]?_0x3471ce(0x143):process[_0x3471ce(0x12b)][_0x3471ce(0x141)]?_0x3471ce(0x14b):process['env'][_0x3471ce(0x140)]?_0x3471ce(0x12f):process[_0x3471ce(0x12b)][_0x3471ce(0x133)]?_0x3471ce(0x133):process[_0x3471ce(0x12b)][_0x3471ce(0x13e)]?_0x3471ce(0x13e):process['env'][_0x3471ce(0x142)]?_0x3471ce(0x127):process[_0x3471ce(0x12b)][_0x3471ce(0x139)]?_0x3471ce(0x13a):_0x3471ce(0x134);

// --- 1000 LED EDGE LIGHTING & CYBER MATRIX AUTO-ROTATING ENGINE ---
let menuStyleIndex = 0;

Sparky({
    name: "menu",
    category: "misc",
    fromMe: isPublic,
    desc: "List all available commands"
}, async ({
    client,
    m,
    args
}) => {
    try {
        if (args) {
            for (let i of plugins.commands) {
                if (i.name.test(args)) {
                    return m.reply(style(`╭───[ COMMAND INFO ]───◆\n│ 📌 *Command:* ${args.trim()}\n│ 📝 *Desc:* ${i.desc.toLowerCase()}\n╰──────────────────────`));
                }
            }
            return m.reply(style("_oops command not found_"))
        } else {
            let [date, time] = new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata"
            }).split(",");
            
            let botName = config.BOT_INFO.split(";")[0].toUpperCase();
            let ownerName = config.BOT_INFO.split(";")[1].toLowerCase();
            let workType = config.WORK_TYPE.toLowerCase();
            let uptimeVal = await m.uptime();

            // STEP 1: Process and Collect all Commands First
            let cmnd = [];
            let type = [];

            commands.map((command) => {
                if (command.name) {
                    let KrizName = command.name;
                    let SparkyCmd = KrizName.source.split('\\s*')[1]?.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)?.[2];
                    if (SparkyCmd && !command.dontAddCommandList) {
                        let category = command.category ? command.category.toLowerCase() : "misc";
                        cmnd.push({ Sparky: SparkyCmd, category: category });
                        if (!type.includes(category)) type.push(category);
                    }
                }
            });
            cmnd.sort();
            type.sort();

            // STEP 2: 1000 Animation Edge-Lighting & Neon Matrix Styles Generator
            const generate1000LEDStyles = () => {
                let stylesArray = [];
                
                // LED Edge Lighting & Neon Glowing Borders Frames
                const ledTopFrames = [
                    "🟥🟧🟨🟩🟦🟪 ⟨ LED_CORE ⟩ 🟪🟦🟩🟨🟧🟥",
                    "╔═🔴═🟠═🟡═🟢═🔵═🟣══╗",
                    "╭──⚡ [ 🌟 NEON_EDGE 🌟 ] ⚡──╮",
                    "┏━━🔴━━━━━━━━━━━━━━━━━━━━🔴┓",
                    "⚡ ── [ 🔥 CYBER_MATRIX 🔥 ] ── ⚡",
                    "╔══✨ *LED_LIGHTING* ✨══╗",
                    "◆═══════[ 💎 VIP_HUB 💎 ]═══════◆",
                    "🚀 ─── ⟨ *RGB_SYSTEM* ⟩ ─── 🚀",
                    "╔═════════🔥 LED_V1.0 🔥═════════╗",
                    "╭────────────────────────────────╮"
                ];

                const ledMidFrames = [
                    "█▓▒░", "║🔥║", "│⚡│", "┃✨┃", "║💎║", "│🚀│", "█▀█", "▌│█"
                ];

                const ledBotFrames = [
                    "🟥🟧🟨🟩🟦🟪 ╚═══════════╝ 🟪🟦🟩🟨🟧🟥",
                    "╚═🟣═🔵═🟢═🟡═🟠═🔴══╝",
                    "╰──⚡ [ 🌟 END_EDGE 🌟 ] ⚡──╯",
                    "┗━━🔴━━━━━━━━━━━━━━━━━━━━🔴┛",
                    "⚡ ── [ 🔥 MATRIX_END 🔥 ] ── ⚡",
                    "╚══✨ *LED_OFF* ✨══╝",
                    "◆══════════════════════════════◆",
                    "🚀 ─── ⟨ *RGB_END* ⟩ ─── 🚀",
                    "╚════════════════════════════════╝"
                ];

                const neonCategoryHeaders = [
                    (c) => `\n🟥 ┏━━━❮ *${c.toUpperCase()}* ❯━━━┓ 🟥\n`,
                    (c) => `\n⚡ ─── 🌟 *${c.toUpperCase()}* 🌟 ─── ⚡\n`,
                    (c) => `\n🟦 ┌───「 *${c.toUpperCase()}* 」 🟦\n`,
                    (c) => `\n🔥 ╔══ *${c.toUpperCase()}* ══╗ 🔥\n`,
                    (c) => `\n💎 ✦ *${c.toUpperCase()}* ✦ 💎\n`,
                    (c) => `\n🚀 ━━━━━━━━ *${c.toUpperCase()}* ━━━━━━━━ 🚀\n`
                ];

                const neonItemBullets = [
                    (cmd) => `┃ 🔴 ➔ ${cmd}\n`,
                    (cmd) => `┃ 🟠 ⚡ ${cmd}\n`,
                    (cmd) => `┃ 🟡 ◈ ${cmd}\n`,
                    (cmd) => `┃ 🟢 ❯ ${cmd}\n`,
                    (cmd) => `┃ 🔵 ✦ ${cmd}\n`,
                    (cmd) => `┃ 🟣 🔥 ${cmd}\n`
                ];

                const neonFooters = [
                    () => `┗━━━━━━━━━━━━━━━━━━━━━━┛\n`,
                    () => `╰──────────────────────╯\n`,
                    () => `╚══════════════════════╝\n`,
                    () => `◆──────────────────────◆\n`,
                    () => `────────────────────────\n`
                ];

                for (let i = 0; i < 1000; i++) {
                    stylesArray.push((prefixVal) => {
                        let tFrame = ledTopFrames[i % ledTopFrames.length];
                        let mFrame = ledMidFrames[Math.floor(i / 5) % ledMidFrames.length];
                        let bFrame = ledBotFrames[i % ledBotFrames.length];

                        let header = `${tFrame}\n` +
                                     `${mFrame} 👑 *Owner*  : ${ownerName}\n` +
                                     `${mFrame} ⚙️ *Mode*   : ${workType}\n` +
                                     `${mFrame} ⚡ *Prefix* : ${prefixVal}\n` +
                                     `${mFrame} 🌐 *Server* : ${SERVER}\n` +
                                     `${mFrame} 📅 *Date*   : ${date}\n` +
                                     `${mFrame} ⏰ *Time*   : ${time}\n` +
                                     `${mFrame} ⏱️ *Uptime* : ${uptimeVal}\n` +
                                     `${mFrame} 📂 *Plugins*: ${commands.length}\n` +
                                     `${bFrame}\n${readMore}\n\n`;

                        let body = "";
                        type.forEach((cmmd, idx) => {
                            let catStyleFn = neonCategoryHeaders[(i + idx) % neonCategoryHeaders.length];
                            body += catStyleFn(cmmd);

                            let comad = cmnd.filter(({ category }) => category == cmmd);
                            comad.forEach(({ Sparky }, itemIdx) => {
                                let itemStyleFn = neonItemBullets[(i + itemIdx) % neonItemBullets.length];
                                body += itemStyleFn(Sparky.trim());
                            });

                            let footStyleFn = neonFooters[(i + idx) % neonFooters.length];
                            body += footStyleFn();
                        });

                        return header + body;
                    });
                }
                return stylesArray;
            };

            const autoStyles = generate1000LEDStyles();

            // Seamless 1000-Style LED Auto Rotation Index
            let selectedMenuStyle = autoStyles[menuStyleIndex](m.prefix);
            menuStyleIndex = (menuStyleIndex + 1) % autoStyles.length;

            let menu = selectedMenuStyle;

            let sperky = {
                "key": {
                    "participants": "0@s.s.whatsapp.net",
                    "remoteJid": "status@broadcast",
                    "fromMe": false,
                    "id": "Hey!"
                },
                "message": {
                    "contactMessage": {
                        "displayName": `${config.BOT_INFO.split(";")[0]}`,
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                    }
                },
                "participant": "0@s.whatsapp.net"
            }
            switch (config.MENU_TYPE.toLowerCase()) {
                case 'big': {
                    return await client.sendMessage(m.jid, {
                        text: style(menu),
                        contextInfo: {
                            externalAdReply: {
                                title: style(`Hey ${m.pushName}!`),
                                body: style(`${config.BOT_INFO.split(";")[0]}`),
                                sourceUrl: "https://aswinsparky.qzz.io",
                                mediaType: 1,
                                showAdAttribution: true,
                                renderLargerThumbnail: true,
                                thumbnailUrl: `${config.BOT_INFO.split(";")[2]}`
                            }
                        }
                    }, { quoted: m });
                    break;
                }
                case 'image': {
                    return await m.sendFromUrl(config.BOT_INFO.split(";")[2], { caption: style(menu) });
                    break;
                }
                case 'small': {
                    return await client.sendMessage(m.jid, {
                        text: style(menu),
                        contextInfo: {
                            externalAdReply: {
                                title: style(`Hey ${m.pushName}!`),
                                body: style(`${config.BOT_INFO.split(";")[0]}`),
                                sourceUrl: "https://aswinsparky.qzz.io",
                                mediaUrl: "https://aswinsparky.qzz.io",
                                mediaType: 1,
                                showAdAttribution: true,
                                renderLargerThumbnail: false,
                                thumbnailUrl: `${config.BOT_INFO.split(";")[2]}`
                            }
                        }
                    }, { quoted: sperky });
                    break;
                }
                case 'document': {
                    return await client.sendMessage(m.jid, {
                        document: {
                            url: 'https://i.ibb.co/pnPNhMZ/2843ad26fd25.jpg'
                        },
                        caption: menu,
                        mimetype: 'application/zip',
                        fileName: style(config.BOT_INFO.split(";")[0]),
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                title: style(`Hey ${m.pushName}!`),
                                body: style(`${config.BOT_INFO.split(";")[0]}`),
                                sourceUrl: "https://aswinsparky.qzz.io",
                                mediaType: 1,
                                showAdAttribution: true,
                                renderLargerThumbnail: true,
                                thumbnailUrl: `${config.BOT_INFO.split(";")[2]}`
                            }
                        }
                    }, {
                        quoted: sperky
                    });
                    break;
                }
                case 'text': {
                    return await client.sendMessage(m.jid, {
                        text: style(menu)
                    }, {
                        quoted: sperky
                    });
                    break;
                }
                case 'video': {
                    return await client.sendMessage(
                        m.jid,
                        {
                            video: { url: config.BOT_INFO.split(";")[2] },
                            caption: style(menu),
                            gifPlayback: true
                        },
                        { quoted: sperky }
                    );
                    break;
                }
                case 'payment': {
                    return await client.relayMessage(m.jid, {
                        requestPaymentMessage: {
                            currencyCodeIso4217: 'INR',
                            amount1000: '99000',
                            requestFrom: m.sender.jid,
                            noteMessage: {
                                extendedTextMessage: {
                                    text: style(menu)
                                }
                            },
                            expiryTimestamp: '0',
                            amount: {
                                value: '99000',
                                offset: 1000,
                                currencyCode: 'INR'
                            },
                        }
                    }, {});
                    break;
                }
                default: {
                    console.log("Unsupported menu format!", config.MENU_TYPE);
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
});
