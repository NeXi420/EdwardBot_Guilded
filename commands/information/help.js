"use strict";
const { Embed } = require("guilded.js");
module.exports.run = async (bot, args, message, lang) => {
    message.send("Help");
}
module.exports.config = {
    name: "help",
    aliases: ["h"],
    permissions: [],
    disable: false,
    cooldown: 5
}