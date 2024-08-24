 const axios = require('axios');

const Prefixes = [
  '/ai',
  'Mélanie',
  'tamamo',
  '+ai',
  'tamamo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("❃ 𝒔𝒂𝒍𝒖𝒕 👋 ,  𝒋𝒆 𝒔𝒖𝒊𝒔 𝐒𝐄𝐍𝐊𝐔 !! 𝑷𝒐𝒔𝒆𝒛 𝒎𝒐𝒊 𝒗𝒐𝒕𝒓𝒆 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏 𝒆𝒕 𝒋𝒆 𝒗𝒐𝒖𝒔 𝒓𝒆́𝒑𝒐𝒏𝒅𝒓𝒂𝒊𝒔 ! 𝐭𝐨𝐮𝐭 𝐜̧𝐚 𝐞𝐬𝐭 𝐟𝐨𝐥𝐥𝐞𝐦𝐞𝐧𝐭 𝐞𝐱𝐜𝐢𝐭𝐚𝐧𝐭 ! (⁠⌐⁠■⁠-⁠■⁠)🤞  ❃. ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: ` ❃ 𝐒𝐄𝐍𝐊𝐔☆𝐁𝐎𝐓 ❃
━━━━━━━━━━━━━        
${answer}
━━━━━━━━━━━━━  ✨🏀 𝐒𝐀𝐏𝐈𝐄𝐍𝐒 𝐉𝐂 🏀✨`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
