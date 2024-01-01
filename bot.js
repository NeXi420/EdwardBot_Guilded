"use strict";
const Bot = require("./classes/Client.js");
const { setup } = require("./database/createTable.js")
const bot = new Bot();
const start = async () => {
    await setup(bot);
    require("moment-duration-format");
    require("./handlers/loadEvents.js").loadEvents(bot);
    require("./handlers/loadCommands.js").loadCommands(bot);
    require("./handlers/loadLanguage.js").loadLanguage(bot);
    require("./handlers/loadProceses.js").loadProceses(bot);
    bot.login();
}
start().catch(e => console.error(e));