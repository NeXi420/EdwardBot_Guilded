"use strict";
const fs = require("fs");
module.exports.loadLanguage = (bot) => {
    fs.readdir("./langs/", (err, foldersLang) => {
        if (err) return console.error(err);
        foldersLang.forEach(langCategoryFolder => {
            fs.readdir(`./langs/${langCategoryFolder}`, (err, langCategory) => {
                if (err) return console.error(err);
                langCategory.forEach(langFolder => {
                    fs.readdir(`./langs/${langCategoryFolder}/${langFolder}`, (err, langFileFolder) => {
                        if (err) return console.error(err);
                        langFileFolder.forEach(langFile => {
                            fs.readdir(`./langs/${langCategoryFolder}/${langFolder}/${langFile}`, (err, langJSON) => {
                                if (err) return console.error(err);
                                langJSON.forEach(langJSONtext => {
                                    const lang = require(`../langs/${langCategoryFolder}/${langFolder}/${langFile}/${langJSONtext}`);
                                    const langName = langJSONtext.split(".")[0];
                                    bot.langs.set(`${langCategoryFolder}/${langFolder}/${langFile}/${langName}`, lang);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}