const {
    Sparky,
    commands,
    isPublic,
    ytv,
    yta
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

// --- AUTO-DOWNLOAD SETTING (Default: ON) ---
let autoDownloadEnabled = true;

const _0x3471ce=_0x4c73;function _0x5149(){const _0x99704b=['HEROKU','PITCHER_API_BASE_URL','PWD','codesandbox','1460490jcYrnC','DIGITALOCEAN','REPLIT','13089848qhFTfM','CLOUDFLARE','GITHUB','TERMUX_VERSION','REPLIT_USER','env','32199750KLjfkJ','18wOomgQ','5701444PXyScu','AZURE','7366gnnTKS','846315zOxTke','RAILWAY','NETLIFY','VPS','AWS','GITHUB_SERVER_URL','DYNO','1131GsaKWJ','SPACE_ID','HUGGINGFACE','KOYEB','CODESANDBOX','RENDER','FLY_IO','5671732abHOue','AZURE_HTTP_FUNCTIONS','DIGITALOCEAN_APP_NAME','CF_PAGES','VERCEL','LINUX','userland'];_0x5149=function(){return _0x99704b;};return _0x5149();}(function(_0x14bc52,_0x9e047e){const _0x5ac994=_0x4c73,_0x256c17=_0x14bc52();while(!![]){try{const _0x1155d4=parseInt(_0x5ac994(0x14a))/0x1+parseInt(_0x5ac994(0x130))/0x2*(-parseInt(_0x5ac994(0x138))/0x3)+parseInt(_0x5ac994(0x13f))/0x4+parseInt(_0x5ac994(0x131))/0x5*(parseInt(_0x5ac994(0x12d))/0x6)+parseInt(_0x5ac994(0x12e))/0x7+parseInt(_0x5ac994(0x126))/0x8+-parseInt(_0x5ac994(0x12c))/0x9;if(_0x1155d4===_0x9e047e)break;else _0x256c17['push'](_0x256c17['shift']());}catch(_0x5dbaeb){_0x256c17['push'](_0x256c17['shift']());}}}(_0x5149,0xd4926));function _0x4c73(_0x3c6eb7,_0x511653){const _0x514924=_0x5149();return _0x4c73=function(_0x4c737c,_0x3e9250){_0x4c737c=_0x4c737c-0x125;let _0x40d9b6=_0x514924[_0x4c737c];return _0x40d9b6;},_0x4c73(_0x3c6eb7,_0x511653);}let SERVER=process[_0x3471ce(0x12b)][_0x3471ce(0x148)]?.['includes'](_0x3471ce(0x145))?_0x3471ce(0x144):process[_0x3471ce(0x12b)][_0x3471ce(0x147)]?.['includes'](_0x3471ce(0x149))?_0x3471ce(0x13c):process['env'][_0x3471ce(0x12a)]?_0x3471ce(0x125):process[_0x3471ce(0x12b)][_0x3471ce(0x135)]?_0x3471ce(0x135):process['env'][_0x3471ce(0x129)]?'TERMUX':process['env'][_0x3471ce(0x137)]?_0x3471ce(0x146):process[_0x3471ce(0x12b)][_0x3471ce(0x13b)]?_0x3471ce(0x13b):process[_0x3471ce(0x12b)][_0x3471ce(0x136)]?_0x3471ce(0x128):process['env']['RENDER']?_0x3471ce(0x13d):process[_0x3471ce(0x12b)][_0x3471ce(0x132)]?_0x3471ce(0x132):process[_0x3471ce(0x12b)][_0x3471ce(0x143)]?_0x3471ce(0x143):process[_0x3471ce(0x12b)][_0x3471ce(0x141)]?_0x3471ce(0x14b):process['env'][_0x3471ce(0x140)]?_0x3471ce(0x12f):process[_0x3471ce(0x12b)][_0x3471ce(0x133)]?_0x3471ce(0x133):process[_0x3471ce(0x12b)][_0x3471ce(0x13e)]?_0x3471ce(0x13e):process['env'][_0x3471ce(0x142)]?_0x3471ce(0x127):process[_0x3471ce(0x12b)][_0x3471ce(0x139)]?_0x3471ce(0x13a):_0x3471ce(0x134);

// --- MENU 1 TO MENU 10 SELECTOR & AUTO-ROTATING ENGINE ---
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
        let selectedIndex = menuStyleIndex;
        
        if (args) {
            let query = args.trim().toLowerCase();
            if (query.startsWith("menu")) {
                let num = parseInt(query.replace("menu", ""));
                if (!isNaN(num) && num >= 1 && num <= 10) {
                    selectedIndex = num - 1;
                }
            } else {
                for (let i of plugins.commands) {
                    if (i.name.test(args)) {
                        return m.reply(style(`╭───[ COMMAND INFO ]───◆\n│ 📌 *Command:* ${args.trim()}\n│ 📝 *Desc:* ${i.desc.toLowerCase()}\n╰──────────────────────`));
                    }
                }
            }
        }

        let [date, time] = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata"
        }).split(",");
        
        let botName = config.BOT_INFO.split(";")[0].toUpperCase();
        let ownerName = config.BOT_INFO.split(";")[1].toLowerCase();
        let workType = config.WORK_TYPE.toLowerCase();
        let uptimeVal = await m.uptime();

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

        const generate10MenuStyles = () => {
            let stylesArray = [];

            // MENU 1: ⚡ Cyber Matrix LED Style
            stylesArray.push((prefixVal) => {
                let header = `🟥🟧🟨🟩🟦🟪 ⟨ MENU 1: CYBER LED ⟩ 🟪🟦🟩🟨🟧🟥\n` +
                             `█▓▒░ 👑 *Owner*  : ${ownerName}\n` +
                             `█▓▒░ ⚙️ *Mode*   : ${workType}\n` +
                             `█▓▒░ ⚡ *Prefix* : ${prefixVal}\n` +
                             `█▓▒░ 🌐 *Server* : ${SERVER}\n` +
                             `█▓▒░ 📅 *Date*   : ${date}\n` +
                             `█▓▒░ ⏰ *Time*   : ${time}\n` +
                             `█▓▒░ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `█▓▒░ 📂 *Plugins*: ${commands.length}\n` +
                             `🟥🟧🟨🟩🟦🟪 ╚═══════════╝ 🟪🟦🟩🟨🟧🟥\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n🟥 ┏━━━❮ *${cmmd.toUpperCase()}* ❯━━━┓ 🟥\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `┃ 🔴 ➔ ${Sparky.trim()}\n`;
                    });
                    body += `┗━━━━━━━━━━━━━━━━━━━━━━┛\n`;
                });
                return header + body;
            });

            // MENU 2: 🔥 Neon Fire Animation Style
            stylesArray.push((prefixVal) => {
                let header = `╔═🔴═🟠═🟡═🟢═🔵═🟣══╗\n` +
                             `║🔥║ 👑 *Owner*  : ${ownerName}\n` +
                             `║🔥║ ⚙️ *Mode*   : ${workType}\n` +
                             `║🔥║ ⚡ *Prefix* : ${prefixVal}\n` +
                             `║🔥║ 🌐 *Server* : ${SERVER}\n` +
                             `║🔥║ 📅 *Date*   : ${date}\n` +
                             `║🔥║ ⏰ *Time*   : ${time}\n` +
                             `║🔥║ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `║🔥║ 📂 *Plugins*: ${commands.length}\n` +
                             `╚═🟣═🔵═🟢═🟡═🟠═🔴══╝\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n⚡ ─── 🌟 *${cmmd.toUpperCase()}* 🌟 ─── ⚡\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `┃ 🟠 ⚡ ${Sparky.trim()}\n`;
                    });
                    body += `╰──────────────────────╯\n`;
                });
                return header + body;
            });

            // MENU 3: 💎 Diamond Glow Style
            stylesArray.push((prefixVal) => {
                let header = `╭──⚡ [ 🌟 MENU 3: DIAMOND 🌟 ] ⚡──╮\n` +
                             `│⚡│ 👑 *Owner*  : ${ownerName}\n` +
                             `│⚡│ ⚙️ *Mode*   : ${workType}\n` +
                             `│⚡│ ⚡ *Prefix* : ${prefixVal}\n` +
                             `│⚡│ 🌐 *Server* : ${SERVER}\n` +
                             `│⚡│ 📅 *Date*   : ${date}\n` +
                             `│⚡│ ⏰ *Time*   : ${time}\n` +
                             `│⚡│ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `│⚡│ 📂 *Plugins*: ${commands.length}\n` +
                             `╰──⚡ [ 🌟 END_EDGE 🌟 ] ⚡──╯\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n🟦 ┌───「 *${cmmd.toUpperCase()}* 」 🟦\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `┃ 🟡 ◈ ${Sparky.trim()}\n`;
                    });
                    body += `┗━━━━━━━━━━━━━━━━━━━━━━┛\n`;
                });
                return header + body;
            });

            // MENU 4: 🚀 Rocket Speed Style
            stylesArray.push((prefixVal) => {
                let header = `┏━━🔴━━━━━━━━━━━━━━━━━━━━🔴┓\n` +
                             `┃✨┃ 👑 *Owner*  : ${ownerName}\n` +
                             `┃✨┃ ⚙️ *Mode*   : ${workType}\n` +
                             `┃✨┃ ⚡ *Prefix* : ${prefixVal}\n` +
                             `┃✨┃ 🌐 *Server* : ${SERVER}\n` +
                             `┃✨┃ 📅 *Date*   : ${date}\n` +
                             `┃✨┃ ⏰ *Time*   : ${time}\n` +
                             `┃✨┃ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `┃✨┃ 📂 *Plugins*: ${commands.length}\n` +
                             `┗━━🔴━━━━━━━━━━━━━━━━━━━━🔴┛\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n🚀 ─── 🛸 *${cmmd.toUpperCase()}* 🛸 ─── 🚀\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `┃ 🟢 🚀 ${Sparky.trim()}\n`;
                    });
                    body += `╰──────────────────────╯\n`;
                });
                return header + body;
            });

            // MENU 5: 👑 Royal Crown Style
            stylesArray.push((prefixVal) => {
                let header = `⚡ ── [ 🔥 MENU 5: ROYAL 🔥 ] ── ⚡\n` +
                             `║💎║ 👑 *Owner*  : ${ownerName}\n` +
                             `║💎║ ⚙️ *Mode*   : ${workType}\n` +
                             `║💎║ ⚡ *Prefix* : ${prefixVal}\n` +
                             `║💎║ 🌐 *Server* : ${SERVER}\n` +
                             `║💎║ 📅 *Date*   : ${date}\n` +
                             `║💎║ ⏰ *Time*   : ${time}\n` +
                             `║💎║ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `║💎║ 📂 *Plugins*: ${commands.length}\n` +
                             `⚡ ── [ 🔥 MATRIX_END 🔥 ] ── ⚡\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n👑 ━━━❮ *${cmmd.toUpperCase()}* ❯━━━ 👑\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `┃ 🟣 👑 ${Sparky.trim()}\n`;
                    });
                    body += `┗━━━━━━━━━━━━━━━━━━━━━━┛\n`;
                });
                return header + body;
            });

            // MENU 6: 💎 Crystal Grid Style
            stylesArray.push((prefixVal) => {
                let header = `┌──────────────────────────┐\n` +
                             `│ 💎 *MENU 6: CRYSTAL*     │\n` +
                             `├──────────────────────────┤\n` +
                             `│ 👑 *Owner*  : ${ownerName}\n` +
                             `│ ⚙️ *Mode*   : ${workType}\n` +
                             `│ ⚡ *Prefix* : ${prefixVal}\n` +
                             `│ 🌐 *Server* : ${SERVER}\n` +
                             `│ 📅 *Date*   : ${date}\n` +
                             `│ ⏰ *Time*   : ${time}\n` +
                             `│ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `│ 📂 *Plugins*: ${commands.length}\n` +
                             `└──────────────────────────┘\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n💎 ───「 *${cmmd.toUpperCase()}* 」─── 💎\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `│ 🔹 ${Sparky.trim()}\n`;
                    });
                    body += `└──────────────────────────┘\n`;
                });
                return header + body;
            });

            // MENU 7: 🔮 Neon Magic Style
            stylesArray.push((prefixVal) => {
                let header = `🔮 ═════ [ MENU 7: MAGIC ] ═════ 🔮\n` +
                             `🔮 👑 *Owner*  : ${ownerName}\n` +
                             `🔮 ⚙️ *Mode*   : ${workType}\n` +
                             `🔮 ⚡ *Prefix* : ${prefixVal}\n` +
                             `🔮 🌐 *Server* : ${SERVER}\n` +
                             `🔮 📅 *Date*   : ${date}\n` +
                             `🔮 ⏰ *Time*   : ${time}\n` +
                             `🔮 ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `🔮 📂 *Plugins*: ${commands.length}\n` +
                             `🔮 ══════════════════════════ 🔮\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n🔮 ── *${cmmd.toUpperCase()}* ── 🔮\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `🔮 ➔ ${Sparky.trim()}\n`;
                    });
                    body += `🔮 ────────────────────────── 🔮\n`;
                });
                return header + body;
            });

            // MENU 8: 🌀 Cyberpunk Matrix Style
            stylesArray.push((prefixVal) => {
                let header = `⚡ [ MENU 8: CYBERPUNK MATRIX ] ⚡\n` +
                             `█▓▒░ 👑 *Owner*  : ${ownerName}\n` +
                             `█▓▒░ ⚙️ *Mode*   : ${workType}\n` +
                             `█▓▒░ ⚡ *Prefix* : ${prefixVal}\n` +
                             `█▓▒░ 🌐 *Server* : ${SERVER}\n` +
                             `█▓▒░ 📅 *Date*   : ${date}\n` +
                             `█▓▒░ ⏰ *Time*   : ${time}\n` +
                             `█▓▒░ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `█▓▒░ 📂 *Plugins*: ${commands.length}\n` +
                             `⚡ [ ======================== ] ⚡\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n⚡ [ *${cmmd.toUpperCase()}* ] ⚡\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `  ⚡ ${Sparky.trim()}\n`;
                    });
                    body += `────────────────────────────\n`;
                });
                return header + body;
            });

            // MENU 9: 🌟 Super Nova Style
            stylesArray.push((prefixVal) => {
                let header = `🌟 ━━━━━━━━━━━━━━━━━━━━━━━━ 🌟\n` +
                             `✨ *MENU 9: SUPER NOVA* ✨\n` +
                             `🌟 ━━━━━━━━━━━━━━━━━━━━━━━━ 🌟\n` +
                             `⭐ 👑 *Owner*  : ${ownerName}\n` +
                             `⭐ ⚙️ *Mode*   : ${workType}\n` +
                             `⭐ ⚡ *Prefix* : ${prefixVal}\n` +
                             `⭐ 🌐 *Server* : ${SERVER}\n` +
                             `⭐ 📅 *Date*   : ${date}\n` +
                             `⭐ ⏰ *Time*   : ${time}\n` +
                             `⭐ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `⭐ 📂 *Plugins*: ${commands.length}\n` +
                             `🌟 ━━━━━━━━━━━━━━━━━━━━━━━━ 🌟\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n🌟 *${cmmd.toUpperCase()}* 🌟\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `⭐ ${Sparky.trim()}\n`;
                    });
                    body += `────────────────────────────\n`;
                });
                return header + body;
            });

            // MENU 10: 💎 Ultimate Matrix Gold Style
            stylesArray.push((prefixVal) => {
                let header = `╔══════════════════════════╗\n` +
                             `║     👑 MENU 10: GOLD 👑    ║\n` +
                             `╚══════════════════════════╝\n` +
                             `✨ 👑 *Owner*  : ${ownerName}\n` +
                             `✨ ⚙️ *Mode*   : ${workType}\n` +
                             `✨ ⚡ *Prefix* : ${prefixVal}\n` +
                             `✨ 🌐 *Server* : ${SERVER}\n` +
                             `✨ 📅 *Date*   : ${date}\n` +
                             `✨ ⏰ *Time*   : ${time}\n` +
                             `✨ ⏱️ *Uptime* : ${uptimeVal}\n` +
                             `✨ 📂 *Plugins*: ${commands.length}\n` +
                             `════════════════════════════\n${readMore}\n\n`;
                let body = "";
                type.forEach((cmmd) => {
                    body += `\n⚜️ ── *${cmmd.toUpperCase()}* ── ⚜️\n`;
                    cmnd.filter(({ category }) => category == cmmd).forEach(({ Sparky }) => {
                        body += `⚜️ ◈ ${Sparky.trim()}\n`;
                    });
                    body += `────────────────────────────\n`;
                });
                return header + body;
            });

            return stylesArray;
        };

        const autoStyles = generate10MenuStyles();
        let selectedMenuStyle = autoStyles[selectedIndex](m.prefix);
        
        // Auto-rotate index fukt jar arguments nasetil tarch pudhe jail
        if (!args) {
            menuStyleIndex = (menuStyleIndex + 1) % autoStyles.length;
        }

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
                            mediaType: 1,
                            showAdAttribution: true,
                            renderLargerThumbnail: true,
                            thumbnailUrl: `${config.BOT_INFO.split(";")[2]}`
                        }
                    }
                }, { quoted: m });
            }
            case 'image': {
                let imageUrl = config.BOT_INFO.split(";")[2] || 'https://i.ibb.co/pnPNhMZ/2843ad26fd25.jpg';
                return await client.sendMessage(m.jid, {
                    image: { url: imageUrl },
                    caption: style(menu)
                }, { quoted: sperky });
            }
            case 'small': {
                return await client.sendMessage(m.jid, {
                    text: style(menu),
                    contextInfo: {
                        externalAdReply: {
                            title: style(`Hey ${m.pushName}!`),
                            body: style(`${config.BOT_INFO.split(";")[0]}`),
                            sourceUrl: "",
                            mediaUrl: "",
                            mediaType: 1,
                            showAdAttribution: true,
                            renderLargerThumbnail: false,
                            thumbnailUrl: `${config.BOT_INFO.split(";")[2]}`
                        }
                    }
                }, { quoted: sperky });
            }
            case 'document': {
                return await client.sendMessage(m.jid, {
                    document: { url: 'https://i.ibb.co/pnPNhMZ/2843ad26fd25.jpg' },
                    caption: menu,
                    mimetype: 'application/zip',
                    fileName: style(config.BOT_INFO.split(";")[0]),
                    fileLength: "99999999999",
                    contextInfo: {
                        externalAdReply: {
                            title: style(`Hey ${m.pushName}!`),
                            body: style(`${config.BOT_INFO.split(";")[0]}`),
                            sourceUrl: "",
                            mediaType: 1,
                            showAdAttribution: true,
                            renderLargerThumbnail: true,
                            thumbnailUrl: `${config.BOT_INFO.split(";")[2]}`
                        }
                    }
                }, { quoted: sperky });
            }
            case 'text': {
                return await client.sendMessage(m.jid, { text: style(menu) }, { quoted: sperky });
            }
            case 'video': {
                return await client.sendMessage(m.jid, {
                    video: { url: config.BOT_INFO.split(";")[2] },
                    caption: style(menu),
                    gifPlayback: true
                }, { quoted: sperky });
            }
            default: {
                return await client.sendMessage(m.jid, { text: style(menu) }, { quoted: sperky });
            }
        }
    } catch (e) {
        console.log("Menu Error:", e);
    }
});

// --- AUTODL ON/OFF COMMAND ---
Sparky({
  name: "autodl",
  fromMe: isPublic,
  category: "youtube",
  desc: "Toggle auto YouTube download on or off"
}, async ({ m, args }) => {
  const status = (args || "").toLowerCase().trim();
  if (status === "on") {
    autoDownloadEnabled = true;
    return await m.reply("✅ Auto-Download successfully ON kela ahe!");
  } else if (status === "off") {
    autoDownloadEnabled = false;
    return await m.reply("✅ Auto-Download successfully OFF kela ahe!");
  } else {
    return await m.reply(`*Auto-Download Status:* ${autoDownloadEnabled ? "ON 🟢" : "OFF 🔴"}\nVapra: _.autodl on_ kinva _.autodl off_`);
  }
});

// --- AUTOMATIC YOUTUBE LINK LISTENER (AUTODL) ---
Sparky({
  on: "text",
  fromMe: false
}, async ({ m }) => {
  try {
    if (!autoDownloadEnabled) return;
    
    const text = m.body || m.text || "";
    if (!text) return;

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matchUrls = text.match(urlRegex);
    
    if (matchUrls) {
      const ytUrl = matchUrls.find(word => word.includes("youtube.com") || word.includes("youtu.be"));
      if (ytUrl) {
        await m.react('⬇️');
        const url = await ytv(ytUrl);
        await m.sendMsg(m.jid, url, { quoted: m }, "video");
        await m.react('✅');
      }
    }
  } catch (error) {
    console.error("AutoDL Error:", error);
    try {
      await m.react('❌');
    } catch (e) {}
  }
});
