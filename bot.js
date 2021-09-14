"use strict";
const Bot = require("./classes/Client.js");
const config = require("./config/config.js");
const bot = new Bot();
require("./handlers/loadEvents.js").loadEvents(bot);
bot.login(config);