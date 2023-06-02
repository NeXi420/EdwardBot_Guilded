"use strict";
module.exports.run = async (bot, args, message, lang) => {
    message.send(`OK, ${bot.servers.shouldCacheServer}`);
}
module.exports.config = {
    name: "dog",
    aliases: ["doggo", "dogs"],
    permissions: [],
    disable: false,
    cooldown: 10
}