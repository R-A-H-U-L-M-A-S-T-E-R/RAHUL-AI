const {
  Sparky,
  isPublic,
  ytv,
  yta,
  isUrl
} = require("../lib");
const { getString } = require('./pluginsCore');

// Auto-download status (Default: Enabled)
let autoDownloadEnabled = true;

// Autodl On/Off Command
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
    return await m.reply("❌ Auto-Download successfully OFF kela ahe!");
  } else {
    return await m.reply(`*Auto-Download Status:* ${autoDownloadEnabled ? "ON 🟢" : "OFF 🔴"}\nVapra: _.autodl on_ kinva _.autodl off_`);
  }
});

// Automatic Message Listener for YouTube URLs
Sparky({
  on: "text",
  fromMe: false
}, async ({ m, client }) => {
  try {
    if (!autoDownloadEnabled) return;
    
    const text = m.body || m.text || "";
    if (!text) return;

    // Check jar message madhe YouTube chi link asel
    const words = text.split(" ");
    const ytUrl = words.find(word => isUrl(word) && (word.includes("youtube.com") || word.includes("youtu.be")));
    
    if (ytUrl) {
      await m.react('⬇️');
      
      // Automatically download and send video
      const url = await ytv(ytUrl);
      await m.sendMsg(m.jid, url, { quoted: m }, "video");
      
      await m.react('✅');
    }
  } catch (error) {
    console.error("AutoDL Error:", error);
    try {
      await m.react('❌');
    } catch (e) {}
  }
});
