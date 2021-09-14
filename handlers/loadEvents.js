"use strict";
const fs = require("fs");
module.exports.loadEvents = (bot) => {
    fs.readdir("./events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            const event = require(`../events/${file}`);
            const eventName = file.split(".")[0];
            bot.on(eventName, event.bind(null, bot));
        });
    });
}