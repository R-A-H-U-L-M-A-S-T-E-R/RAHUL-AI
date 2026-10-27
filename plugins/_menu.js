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

// --- 1000 ULTRA MEGA AUTO-ROTATING MENU ENGINE ---
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

            // Programmatically generating 1000 unique styles seamlessly
            const generate1000Styles = () => {
                let stylesArray = [];

                for (let i = 0; i < 1000; i++) {
                    stylesArray.push((p) => {
                        let header = "";
                        let footer = readMore + "\n\n";
                        
                        // Switch across 50 distinct base archetypes to guarantee endless variety
                        switch (i % 50) {
                            case 0:
                                header = `┌──────────────────────────────┐\n│   ⚡ [ *${botName} CORE* ] ⚡   │\n├──────────────────────────────┤\n│ 👤 USER   : ${ownerName}\n│ ⚙️ STATUS : ${workType}\n│ ⚡ PREFIX : ${p}\n│ ⏱️ UPTIME : ${uptimeVal}\n└──────────────────────────────┘\n${footer}`;
                                break;
                            case 1:
                                header = `✦ ───『 *${botName}* 』─── ✦\n│ 👑 Owner  : ${ownerName}\n│ 🚀 Mode   : ${workType}\n│ 💻 Prefix : ${p}\n│ 🌐 Server : ${SERVER}\n✦──────────────────────✦\n${footer}`;
                                break;
                            case 2:
                                header = `╔══════════════════════════════╗\n║      🌟 *${botName}* 🌟      ║\n╠══════════════════════════════╣\n║ 👤 MASTER : ${ownerName}\n║ 🔧 ENGINE : ${workType}\n║ 📌 TRIGGER: ${p}\n╚══════════════════════════════╝\n${footer}`;
                                break;
                            case 3:
                                header = `╭━━━[ *${botName} v3.0* ]━━━╮\n┃ 🎯 Owner  : ${ownerName}\n┃ 🔋 Mode   : ${workType}\n┃ ⚡ Prefix : ${p}\n┃ ⏳ Uptime : ${uptimeVal}\n╰━━━━━━━━━━━━━━━━━━━━━━╯\n${footer}`;
                                break;
                            case 4:
                                header = `---=== [ *${botName}* ] ===---\n » Owner  : ${ownerName}\n » Mode   : ${workType}\n » Prefix : ${p}\n » Server : ${SERVER}\n--------------------------\n${footer}`;
                                break;
                            case 5:
                                header = `╔═.★.═════════════════.★.═╗\n║      *${botName} SYSTEM*      ║\n╠═════════════════════════╣\n║ 👑 Operator : ${ownerName}\n║ ⚙️ Protocol : ${workType}\n║ ⚡ Command  : ${p}\n╚═.★.═════════════════.★.═╝\n${footer}`;
                                break;
                            case 6:
                                header = `┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃   ⚡ *${botName}* ⚡   ┃\n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 👤 Owner : ${ownerName}\n┃ 🛠️ Mode  : ${workType}\n┃ 🚀 Prefix: ${p}\n┗━━━━━━━━━━━━━━━━━━━━━━┛\n${footer}`;
                                break;
                            case 7:
                                header = `╭──────────────────────╮\n│   🔥 *${botName}* 🔥   │\n├──────────────────────┤\n│ Owner  : ${ownerName}\n│ Status : ${workType}\n│ Prefix : ${p}\n╰──────────────────────╯\n${footer}`;
                                break;
                            case 8:
                                header = `★━━━━━━━[ *${botName}* ]━━━━━━━★\n╎ 👤 Owner : ${ownerName}\n╎ ⚙️ Mode  : ${workType}\n╎ ⚡ Prefix: ${p}\n╎ ⏱️ Uptime: ${uptimeVal}\n★━━━━━━━━━━━━━━━━━━━━━━★\n${footer}`;
                                break;
                            case 9:
                                header = `◆════════════════════════◆\n◆     *${botName} HUB*     ◆\n◆════════════════════════◆\n│ 👤 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n◆────────────────────────◆\n${footer}`;
                                break;
                            case 10:
                                header = `🚀 ─── *${botName} PANEL* ─── 🚀\n│ 📌 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n└────────────────────────┘\n${footer}`;
                                break;
                            case 11:
                                header = `╔════════════════════════╗\n║  💎 *${botName}* 💎  ║\n╚════════════════════════╝\n│ 👤 Owner : ${ownerName}\n│ ⚡ Prefix: ${p}\n──────────────────────────\n${footer}`;
                                break;
                            case 12:
                                header = `╭•《 *${botName} SYSTEM* 》•╮\n│ 👤 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n╰────────────────────────╯\n${footer}`;
                                break;
                            case 13:
                                header = `┌────────────────────────┐\n│ ⚡ *${botName} DASHBOARD* ⚡\n├────────────────────────┤\n│ 👤 Owner : ${ownerName}\n│ 🚀 Prefix: ${p}\n└────────────────────────┘\n${footer}`;
                                break;
                            case 14:
                                header = `╔════════════════════════════╗\n║ 👑 *${botName}* - BOT      ║\n╠════════════════════════════╣\n║ User   : ${ownerName}\n║ Status : ${workType}\n╚════════════════════════════╝\n${footer}`;
                                break;
                            case 15:
                                header = `⚡════════════════════════⚡\n     *${botName} v1.0*     \n⚡════════════════════════⚡\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n──────────────────────────\n${footer}`;
                                break;
                            case 16:
                                header = `╭•-•-•[ *${botName}* ]•-•-•╮\n│ 👤 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n╰•-•-•-•-•-•-•-•-•-•-•-•╯\n${footer}`;
                                break;
                            case 17:
                                header = `┌─[ *${botName}* ]─┐\n│ 👤 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n└──────────────────┘\n${footer}`;
                                break;
                            case 18:
                                header = `✨ *${botName} CONTROL CENTER* ✨\n──────────────────────────\n│ 👤 Owner : ${ownerName}\n│ ⚡ Prefix: ${p}\n│ ⏱️ Uptime: ${uptimeVal}\n──────────────────────────\n${footer}`;
                                break;
                            case 19:
                                header = `╔══════════════════════════╗\n║ 🚀 *${botName}*           ║\n╠══════════════════════════╣\n║ Owner  : ${ownerName}\n║ Prefix : ${p}\n╚══════════════════════════╝\n${footer}`;
                                break;
                            case 20:
                                header = `┏━━━❮ *${botName}* ❯━━━┓\n┃ 👤 Owner : ${ownerName}\n┃ ⚙️ Mode  : ${workType}\n┃ ⚡ Prefix: ${p}\n┗━━━━━━━━━━━━━━━┛\n${footer}`;
                                break;
                            case 21:
                                header = `✦───────────────✦\n  *${botName} BOT MENU*  \n✦───────────────✦\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n✦───────────────✦\n${footer}`;
                                break;
                            case 22:
                                header = `╔════════════════════════╗\n║ 🛡️ *${botName} SECURITY* ║\n╠════════════════════════╣\n║ User   : ${ownerName}\n║ Prefix : ${p}\n╚════════════════════════╝\n${footer}`;
                                break;
                            case 23:
                                header = `╭═══[ *${botName}* ]═══╮\n│ 👤 ${ownerName}\n│ ⚙️ ${workType}\n│ ⚡ ${p}\n╰──────────────────────╯\n${footer}`;
                                break;
                            case 24:
                                header = `┌────────────────────────┐\n│  👑 *${botName}* 👑  │\n├────────────────────────┤\n│ Owner  : ${ownerName}\n│ Prefix : ${p}\n└────────────────────────┘\n${footer}`;
                                break;
                            case 25:
                                header = `══════[ *${botName}* ]══════\n│ 👤 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n══════════════════════════\n${footer}`;
                                break;
                            case 26:
                                header = `╭───[ *${botName}* ]───╮\n│ ⚡ Owner : ${ownerName}\n│ 🔧 Mode  : ${workType}\n│ 🚀 Prefix: ${p}\n╰──────────────────────╯\n${footer}`;
                                break;
                            case 27:
                                header = `┌•🌐 *${botName}* 🌐•┐\n│ Owner  : ${ownerName}\n│ Status : ${workType}\n│ Prefix : ${p}\n└──────────────────────┘\n${footer}`;
                                break;
                            case 28:
                                header = `╔══✦ *${botName}* ✦══╗\n║ 👤 Owner : ${ownerName}\n║ ⚙️ Mode  : ${workType}\n║ ⚡ Prefix: ${p}\n╚══════════════════╝\n${footer}`;
                                break;
                            case 29:
                                header = `┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃   👑 *${botName}* 👑   ┃\n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ Owner  : ${ownerName}\n┃ Prefix : ${p}\n┗━━━━━━━━━━━━━━━━━━━━━━┛\n${footer}`;
                                break;
                            case 30:
                                header = `╔════════╦════════════════╗\n║ BOT    ║ *${botName}*   ║\n╠════════╬════════════════╣\n║ OWNER  ║ ${ownerName}   ║\n║ PREFIX ║ ${p}      ║\n╚════════╩════════════════╝\n${footer}`;
                                break;
                            case 31:
                                header = `⚡ ── *${botName}* ── ⚡\n┌────────────────────────┐\n│ 👑 Owner : ${ownerName}\n│ ⚡ Prefix: ${p}\n└────────────────────────┘\n${footer}`;
                                break;
                            case 32:
                                header = `🎯 *${botName} MAIN MENU* 🎯\n══════════════════════════\n│ 👤 Owner : ${ownerName}\n│ ⚙️ Mode  : ${workType}\n│ ⚡ Prefix: ${p}\n══════════════════════════\n${footer}`;
                                break;
                            case 33:
                                header = `┌────────────────────────┐\n│ 🚀 *${botName}* v4.0   │\n└────────────────────────┘\n│ Owner  : ${ownerName}\n│ Prefix : ${p}\n──────────────────────────\n${footer}`;
                                break;
                            case 34:
                                header = `🔥══════════════════════🔥\n     *${botName} HUB*     \n🔥══════════════════════🔥\n│ Owner  : ${ownerName}\n│ Prefix : ${p}\n──────────────────────────\n${footer}`;
                                break;
                            case 35:
                                header = `╭──────────────────────╮\n│ 💻 *${botName}*          │\n├──────────────────────┤\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n╰──────────────────────╯\n${footer}`;
                                break;
                            case 36:
                                header = `★──────── *${botName}* --------★\n│ 👤 Owner : ${ownerName}\n│ ⚡ Prefix: ${p}\n★----------------------★\n${footer}`;
                                break;
                            case 37:
                                header = `╔════════════════════════╗\n║ ⚡ *${botName}*        ║\n╚════════════════════════╝\n│ 👤 Owner : ${ownerName}\n│ ⚡ Prefix: ${p}\n──────────────────────────\n${footer}`;
                                break;
                            case 38:
                                header = `┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃ 🔥 *${botName}*       ┃\n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ Owner : ${ownerName}\n┃ Prefix: ${p}\n┗━━━━━━━━━━━━━━━━━━━━━━┛\n${footer}`;
                                break;
                            case 39:
                                header = `◆━━━━ *${botName}* ━━━━◆\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n◆──────────────────────◆\n${footer}`;
                                break;
                            case 40:
                                header = `╭━━━❖ *${botName}* ❖━━━╮\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n╰──────────────────────╯\n${footer}`;
                                break;
                            case 41:
                                header = `┌───「 *${botName}* 」───┐\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n└──────────────────────┘\n${footer}`;
                                break;
                            case 42:
                                header = `╔═✨ *${botName}* ✨═╗\n║ Owner : ${ownerName}\n║ Prefix: ${p}\n╚══════════════════════╝\n${footer}`;
                                break;
                            case 43:
                                header = `✦══════════════════════✦\n  *${botName} SYSTEM*  \n✦══════════════════════✦\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n✦══════════════════════✦\n${footer}`;
                                break;
                            case 44:
                                header = `┌──────────────────────┐\n│ 👑 *${botName}*        │\n├──────────────────────┤\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n└──────────────────────┘\n${footer}`;
                                break;
                            case 45:
                                header = `┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃ ⚡ *${botName}*         ┃\n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ Owner : ${ownerName}\n┃ Prefix: ${p}\n┗━━━━━━━━━━━━━━━━━━━━━━┛\n${footer}`;
                                break;
                            case 46:
                                header = `╭──────────────────────╮\n│ 🚀 *${botName}*        │\n├──────────────────────┤\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n╰──────────────────────╯\n${footer}`;
                                break;
                            case 47:
                                header = `╔══════════════════════╗\n║ 💻 *${botName}*        ║\n╠══════════════════════╣\n║ Owner : ${ownerName}\n║ Prefix: ${p}\n╚══════════════════════╝\n${footer}`;
                                break;
                            case 48:
                                header = `★━━━━ *${botName}* ━━━━★\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n★──────────────────────★\n${footer}`;
                                break;
                            case 49:
                                header = `◆════ *${botName}* ════◆\n│ Owner : ${ownerName}\n│ Prefix: ${p}\n◆──────────────────────◆\n${footer}`;
                                break;
                        }
                        
                        let body = "";
                        const categoryStyles = [
                            (cat) => `┌───「 *${cat.toUpperCase()}* 」\n`,
                            (cat) => `╭───❖ *${cat.toUpperCase()}* ❖───◆\n`,
                            (cat) => `╔══ *${cat.toUpperCase()}* ══╗\n`,
                            (cat) => `◆━━━ *${cat.toUpperCase()}* ━━━◆\n`,
                            (cat) => `✦ *${cat.toUpperCase()}*\n`,
                            (cat) => `┏━━━❮ *${cat.toUpperCase()}* ❯━━━┓\n`,
                            (cat) => `⚡ *${cat.toUpperCase()}* ⚡\n`
                        ];

                        const itemStyles = [
                            (cmd) => `├ • ${cmd}\n`,
                            (cmd) => `│ ◈ ${cmd}\n`,
                            (cmd) => `║ ❯ ${cmd}\n`,
                            (cmd) => `│ ⚡ ${cmd}\n`,
                            (cmd) => `  » ${cmd}\n`,
                            (cmd) => `┃ 📌 ${cmd}\n`
                        ];

                        const footerStyles = [
                            () => `└───────────────\n\n`,
                            () => `╰──────────────────────◆\n\n`,
                            () => `╚═══════════════╝\n\n`,
                            () => `◆──────────────────────◆\n\n`,
                            () => `┗━━━━━━━━━━━━━━━┛\n\n`,
                            () => `\n`
                        ];

                        type.sort().forEach((cmmd, idx) => {
                            let catStyleFn = categoryStyles[(i + idx) % categoryStyles.length];
                            body += catStyleFn(cmmd);
                            
                            let comad = cmnd.filter(({ category }) => category == cmmd);
                            comad.sort();
                            comad.forEach(({ Sparky }, itemIdx) => {
                                let itemStyleFn = itemStyles[(i + itemIdx) % itemStyles.length];
                                body += itemStyleFn(Sparky.trim());
                            });

                            let footStyleFn = footerStyles[(i + idx) % footerStyles.length];
                            body += footStyleFn();
                        });

                        return header + body;
                    });
                }
                return stylesArray;
            };

            const autoStyles = generate1000Styles();

            let cmnd = [];
            let SparkyCmd;
            let type = [];

            // Sorting commands based on category
            commands.map((command, num) => {
                if (command.name) {
                    let KrizName = command.name;
                    SparkyCmd = KrizName.source.split('\\s*')[1].toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
                }
                if (command.dontAddCommandList || SparkyCmd === undefined) return;
                if (!command.dontAddCommandList && SparkyCmd !== undefined) {
                    let category;
                    if (!command.category) {
                        category = "misc";
                    } else {
                        category = command.category.toLowerCase();
                    }
                    cmnd.push({
                        Sparky: SparkyCmd,
                        category: category
                    });
                    if (!type.includes(category)) type.push(category);
                }
            });

            cmnd.sort();

            // Auto-rotation engine index progression across 1000 styles
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
