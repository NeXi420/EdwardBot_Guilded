"use strict";
const { Embed } = require("guilded.js");
module.exports.run = async (bot, args, message, lang) => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const file = await res.json();
    const embed = new Embed()
        .setDescription("Piesek <3")
        .setImage(file.message)
    message.send(embed);
}
module.exports.config = {
    name: "dog",
    aliases: ["doggo", "dogs"],
    permissions: [],
    disable: false,
    cooldown: 3
}