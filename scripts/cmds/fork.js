module.exports = {
  config: {
    name: "fork",
    aliases: ["repo", "link"],
    version: "1.0",
    author: "Aphelion",
    countDown: 3,
    role: 0,
    longDescription: "Returns the link to the official, updated fork of the bot's repository.",
    category: "system",
    guide: { en: "{pn}" }
  },

  onStart: async function({ message }) {
    const text = "ওরে খানকির পোলা 👆নে,https://www.facebook.com/profile.php?id=61568411310748";
    
    message.reply(text);
  }
};
