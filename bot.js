"use strict";
const Bot = require("./classes/Client.js");
const bot = new Bot();
require("moment-duration-format");
require("dotenv").config();
require("./handlers/loadEvents.js").loadEvents(bot);
const config = require("./config/config.js");
bot.login(config);