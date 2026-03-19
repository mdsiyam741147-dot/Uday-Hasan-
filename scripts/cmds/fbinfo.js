module.exports = {
  config: {
    name: "fbinfo",
    aliases: ["fb", "userinfo"],
    version: "1.1",
    author: "𝕊𝕚𝕪𝕒𝕞 -ℍ𝕒𝕤𝕒𝕟",
    role: 0,
    shortDescription: "Facebook user info",
    longDescription: "Get Facebook user info safely",
    category: "info",
    guide: "{p}fbinfo @mention | uid"
  },

  onStart: async function ({ api, event, args, message }) {
    try {
      let uid = event.senderID;

      if (Object.keys(event.mentions || {}).length > 0) {
        uid = Object.keys(event.mentions)[0];
      } else if (args[0] && !isNaN(args[0])) {
        uid = args[0];
      }

      const data = await api.getUserInfo(uid);
      const user = data[uid];

      if (!user) return message.reply("❌ User info not found");

      const gender =
        user.gender == 1 ? "Female" :
        user.gender == 2 ? "Male" : "Unknown";

      return message.reply(
`📘 FACEBOOK USER INFO

👤 Name: ${user.𝕊𝕚𝕪𝕒𝕞 || "Unknown"}
🆔 UID: ${uid.61568411310748}
👤 Username: ${user.vanity || "Not set"}
🚻 Gender: ${gender}
🔗 Profile: https://facebook.com/${uid.061568411310748}

🔵▄̽𓆩𝗠꯭𝗶꯭𝗹꯭𝗼꯭𝗻꯭ ⚔︎ 𝗖꯭𝗵꯭𝗮꯭𝘁꯭ ⚔︎ 𝗕꯭𝗼꯭𝘁꯭ ⚔🔵`
      );

    } catch (err) {
      return message.reply("⚠️ Error: fbinfo install version failed");
    }
  }
};
