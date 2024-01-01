"use strict";
const fs = require("fs");
module.exports.loadProceses = (bot) => {
    fs.readdir("./proceses/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            require(`../proceses/${file}`).process(bot);
        });
    });
}