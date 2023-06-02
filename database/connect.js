"use strict";
const { QuickDB } = require('quick.db');
module.exports = (bot) => {
    return new QuickDB({
        filePath: "./database/database.sqlite",
        asyncWrite: true,
        asyncLocation: "./database/async.sqlite"
    });
}