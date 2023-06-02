"use strict";
const Bot = require("./classes/Client.js");
const bot = new Bot();
require("moment-duration-format");
require("./handlers/loadEvents.js").loadEvents(bot);
require("./handlers/loadCommands.js").loadCommands(bot);
require("./handlers/loadLanguage.js").loadLanguage(bot);
require("./handlers/loadProceses.js").loadProceses(bot);
bot.login();