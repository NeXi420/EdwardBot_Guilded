"use strict";
const { cooldown } = require("../modules/cooldownModule.js");
module.exports = async (bot, message) => {
    const prefix = "!";
    const lang = "pl";
    //const { prefix, lang } = await bot.db.get(message.server.id);
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