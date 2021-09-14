const Bot = require("./classes/Client.js");
const config = require("./config/config.js");
const bot = new Bot();
bot.login(config);