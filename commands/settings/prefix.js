"use strict";
module.exports.run = async (bot, args, message, lang) => {
    message.send("OK");
}
module.exports.config = {
    name: "prefix",
    aliases: ["p"],
    permissions: [],
    disable: false,
    cooldown: 5
}