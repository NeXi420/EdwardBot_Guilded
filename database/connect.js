"use strict";
const Database = require("better-sqlite3");
module.exports = (bot) => {
    const conn = new Database('edward.db', { verbose: console.log });
    bot.conn = conn;
}