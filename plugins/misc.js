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
    pattern: "ping",
    fromMe: isPublic,
    category: "misc",
    desc: "Checks if the bot is online and responsive."
},
async ({
    m
}) => {
    const start = Date.now();
    
    // Send initial ping text
    await m.sendMsg(m.jid, "```[ ⚡ ] ʀᴀʜᴜʟ ᴀɪ ꜱʏꜱᴛᴇᴍ ᴘɪɴɢɪɴɢ...```", {
        quoted: m
    });
    
    const latency = Date.now() - start;

    // Clean Cyberpunk / Neon style ping response
    let pingStyle = `
╔══════════════════╗
║  ⚡ **ʀᴀʜᴜʟ ᴀɪ ꜱᴛᴀᴛᴜꜱ** ⚡  ║
╚══════════════════╝
│ 🚀 **Speed:** \`${latency} ms\`
│ 🌐 **Status:** \`ONLINE & READY\`
│ 🧨 **Engine:** \`BAILEYS v6\`
╚══════════════════╝`.trim();

    return await m.sendMsg(m.jid, pingStyle, {
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
		return await m.reply(`https://wa.me/${m?.quoted ? m?b.quoted?.sender?.split("@")[0] : m?.sender?.split("@")[0]}${args ? `?text=${args}` : ''}`);
	});
