"use strict";
const { UserType } = require("guilded.js");
const { cooldown } = require("../modules/cooldownModule.js");
const { chatai } = require("../modules/chataiModule.js");
module.exports = async (bot, message) => {
    if (!message.author) return;
    chatai(bot, message);
    const settings = await bot.db.collection("Settings").findOne({ _id: message.server.id });
    if (!settings) return;
    const { prefix, lang } = settings;
    if (message.content.match(`^<@!?${bot.user.id}> ?$`)) return message.send(`My prefix is ${prefix}`);
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const content = args.shift().toLowerCase();
    let command = bot.commands.get(content);
    const alias = bot.aliases.get(content);
    if (alias) command = bot.commands.get(alias);
    if (command) {
        const disableInfo = bot.langs.get(`${lang}/other/message/messageDisable`);
        if (command.config.disable) return message.send(disableInfo.info.replace("{command}",command.config.name));
        const langJSON = bot.langs.get(`${lang}/commands/${command.category}/${command.config.name}`);
        const { done, time } = cooldown(bot, command, message.author.id);
        if (!done) return message.send("SLOW DOWN "+ time);
        command.run(bot, args, message, langJSON);
        command.usage++;
    }
}