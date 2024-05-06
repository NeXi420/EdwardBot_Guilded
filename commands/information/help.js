"use strict";
const { Embed } = require("guilded.js");
module.exports.run = async (bot, args, message, lang) => {
    const embed = new Embed()
    .addField("a", "a")
    .setFooter("Test", bot.user.avatar)
    if (!args[0]) return message.send({ embeds: [embed] });
}
module.exports.config = {
    name: "help",
    aliases: ["h"],
    permissions: [],
    disable: false,
    cooldown: 5
}