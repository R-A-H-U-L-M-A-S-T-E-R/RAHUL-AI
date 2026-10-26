const {
	Sparky,
	isPublic
} = require("../lib/");
const config = require("../config.js");


Sparky({
		name: "jid",
		fromMe: isPublic,
		category: "misc",
		desc: "Gets the unique ID of a whatsapp chat or user."
	},
	async ({
		m
	}) => {
		return await m.reply(`${m?.quoted ? m?.quoted?.sender : m.jid}`);
	});


Sparky({
		name: "runtime",
		fromMe: isPublic,
		category: "misc",
		desc: "Shows the bot's current runtime."
	},
	async ({
		m
	}) => {
		return await m.reply(`_Runtime : ${await m.runtime()}_`);
	});


Sparky({
    name: "ping",
    fromMe: isPublic,
    category: "misc",
    desc: "Checks if the bot is online and responsive."
},
async ({
    m
}) => {
    const start = Date.now();
    
    let pingMsg = await m.sendMsg(m.jid, "```ᴘɪɴɢɪɴɢ ʀᴀʜᴜʟ-ᴀɪ... ⏳```", {
        quoted: m
    });
    
    const latency = Date.now() - start;

    // 10 Auto-Changing / Rotating Cyberpunk & Neon Ping Styles
    const pingStyles = [
        `┌──────────────────────────\n│ ⚡ **ʀᴀʜᴜʟ-ᴀɪ ꜱʏꜱᴛᴇᴍ ᴘɪɴɢ**\n├──────────────────────────\n│ 🚀 ʟᴀᴛᴇɴᴄʏ : \`${latency} ms\`\n│ 👑 ᴏᴡɴᴇʀ   : \`ʀᴀʜᴜʟ ᴍᴀꜱᴛᴇʀ\`\n│ 🌐 ꜱᴛᴀᴛᴜꜱ : \`ᴀᴄᴛɪᴠᴇ & ᴏɴʟɪɴᴇ\`\n│ 🧨 ᴍᴏᴅᴇ   : \`ᴘᴜʙʟɪᴄ\`\n└──────────────────────────`,
        
        `╔════════════════════════╗\n║    🔥 ʀᴀʜᴜʟ-ᴀɪ ᴘɪɴɢ 🔥    ║\n╠════════════════════════╣\n║ 🚀 ꜱᴘᴇᴇᴅ  : ${latency} ms\n║ ⚡ ꜱᴛᴀᴛᴜꜱ : ᴏɴʟⵉɴᴇ\n║ 🛡️ ꜱʏꜱᴛᴇᴍ : ꜱᴇᴄᴜʀᴇ\n╚════════════════════════╝`,
        
        `╭━━━〔 ʀᴀʜᴜʟ-ᴀɪ ꜱᴘᴇᴇᴅ 〕━━━╮\n┃ ⚡ ʟᴀᴛᴇɴᴄʏ : ${latency} ms\n┃ 💎 ᴇɴɢɪɴᴇ : ʙᴀɪʟᴇʏꜱ\n┃ 🚀 ꜱᴛᴀᴛᴜꜱ : ꜰᴀꜱᴛ & ʀᴇᴀᴅʏ\n╰━━━━━━━━━━━━━━━━━━━━━━╯`,
        
        `⚡ **ʀᴀʜᴜʟ-ᴀɪ ʟɪᴠᴇ ᴘɪɴɢ** ⚡\n────────────────────────\n│ 🚀 **ＭＳ:** \`${latency}ms\`\n│ 🔮 **ＰＩＮＧ:** \`⚡ ꜱᴛᴀʙʟᴇ\`\n│ 🎯 **ＭＯＤＥ:** \`ᴘᴜʙʟɪᴄ\`\n────────────────────────`,
        
        `┏━━━━━━━━━━━━━━━┓\n┃ 🚀 **ʀᴀʜᴜʟ-ᴀɪ ᴘɪɴɢ** \n┣━━━━━━━━━━━━━━━┫\n┃ ⏱️ ʀᴇsᴘᴏɴsᴇ : \`${latency} ms\`\n┃ 🌐 ɴᴇᴛᴡᴏʀᴋ : \`ʜɪɢʜ-sᴘᴇᴇᴅ\`\n┗━━━━━━━━━━━━━━━┛`,
        
        `╭━━━[ ʀᴀʜᴜʟ-ᴀɪ ɴᴇᴏɴ ]━━━╮\n┃ ⚡ ꜱᴘᴇᴇᴅ  : ${latency} ms\n┃ 🛡️ ᴘʀᴏᴛᴏᴄᴏʟ : ᴀᴄᴛɪᴠᴇ\n┃ 👑 ʜᴏꜱᴛ    : ʀᴀʜᴜʟ ᴍᴀꜱᴛᴇʀ\n╰━━━━━━━━━━━━━━━━━━╯`,
        
        `╔═.🚀.═══════════════.🚀.═╗\n  **ʀᴀʜᴜʟ-ᴀɪ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ**\n  ⏱️ ꜱᴘᴇᴇᴅ : \`${latency} ms\`\n  ✨ ꜱᴛᴀᴛᴜꜱ : ᴏɴʟɪɴᴇ\n╚═.⚡.═══════════════.⚡.═╝`,
        
        `┌───────────────────┐\n│ ⚡ ʀᴀʜᴜʟ-ᴀɪ ʀᴀᴅᴀʀ ⚡\n├───────────────────┤\n│ 🚀 ᴘɪɴɢ  : ${latency} ms\n│ 🔋 ᴘᴏᴡᴇʀ  : 100%\n│ 🚀 ʀᴇᴀᴅʏ  : ʏᴇꜱ\n└───────────────────┘`,
        
        `╭───────────────────────╮\n│  🔥 **ʀᴀʜᴜʟ-ᴀɪ ꜱʏꜱᴛᴇᴍ**  🔥\n├───────────────────────┤\n│  ⚡ ꜱᴘᴇᴇᴅ : \`${latency} ms\`\n│  🌐 ꜱᴛᴀᴛᴜꜱ: \`ᴏɴʟɪɴᴇ\`\n╰───────────────────────╯`,
        
        `⚡ **ʀᴀʜᴜʟ-ᴀɪ ꜱᴘᴇᴇᴅ ᴛᴇꜱᴛ** ⚡\n• ʟᴀᴛᴇɴᴄʏ : \`${latency} ms\`\n• ᴏᴡɴᴇʀ   : \`ʀᴀʜᴜʟ ᴍᴀꜱᴛᴇʀ\`\n• ꜱᴛᴀᴛᴜꜱ : \`ʀᴇꜱᴘᴏɴꜱɪᴠᴇ\`\n──────────────────────`
    ];

    // Automatically picks a random style out of the 10 styles on every ping
    const randomStyle = pingStyles[Math.floor(Math.random() * pingStyles.length)];

    return await m.sendMsg(m.jid, randomStyle, {
        quoted: m
    });
});

Sparky({
		name: "wame",
		fromMe: isPublic,
		category: "misc",
		desc: "Converts a phone number into a whatsapp link."
	},
	async ({
		m,
		args
	}) => {
		return await m.reply(`https://wa.me/${m?.quoted ? m?.quoted?.sender?.split("@")[0] : m?.sender?.split("@")[0]}${args ? `?text=${args}` : ''}`);
	});
