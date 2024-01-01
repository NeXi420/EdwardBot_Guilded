"use strict";
const fs = require("fs");
module.exports.loadCommands = (bot) => {
    fs.readdir("./commands/", (err, folders) => {
        if (err) return console.error(err);
        folders.forEach(folder => {
            fs.readdir(`./commands/${folder}/`, (err, files) => {
                if (err) return console.error(err);
                files.forEach(file => {
                    if (!file.endsWith(".js")) return;
                    const { config, run } = require(`../commands/${folder}/${file}`);
                    bot.commands.set(config.name, { config, run, category: folder, usage: 0 });
                    for (const alias of config.aliases) {
                        bot.aliases.set(alias, config.name);
                    }
                    console.log(`Próba załadowania polecenia ${config.name} | kategoria ${folder}`);
                });
            });
        });
    });
}