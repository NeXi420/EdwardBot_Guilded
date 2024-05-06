"use strict";
const { G4F } = require("g4f");
const g4f = new G4F();
module.exports = {
    chatai: async (bot, message) => {
        if (message.channelId === "4eca9867-16d3-4e36-99ac-5fa8b904bbc7") {
            const userConstruct = {
                role: "user",
                content: `${message.content}`
            }
    
            const chatRes = await g4f.chatCompletion([userConstruct]);
    
            for (let i = 0; i < Math.ceil(chatRes.length/2000); i++) {
                const start = i * 2000;
                const end = start + 2000;
                const fragment = chatRes.substring(start, end);
                message.send(fragment);
            }
        }
    }
}