"use strict";
const chalk = require("chalk");
module.exports = {
    errEvents: async (bot) => {
        const botEvents = () => {
            bot.on("error", (err) => console.error(chalk.hex("#ff0000")("BOT error: ", err)));
            bot.on("warn", (err) => console.warn(chalk.hex("#ff9300")("Warn: ", err)));
            bot.on("debug", (err) => console.info(chalk.hex("#00f3ff")("Debug: ", err)));
        }
        const processEvents = () => {
            process.on("unhandledRejection", (err) => console.error(chalk.hex("#ff0000")("Unhandled rejection: ", err)));
            process.on("rejectionHandled", (err) => console.error(chalk.hex("#ff0000")("Rejection handled: ", err)));
            process.on("uncaughtException", (err) => console.error(chalk.hex("#ff0000")("Uncaught exception: ", err)));
        }
        botEvents();
        processEvents();
    }
}