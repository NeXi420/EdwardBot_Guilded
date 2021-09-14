"use strict";
const { Client } = require("@guildedjs/guilded.js");
const { CacheCollection } = require("@guildedjs/common");
class Bot extends Client {
    constructor() {
        super({

        });
        this.commands = new CacheCollection();
        this.aliases = new CacheCollection();
    }
}
module.exports = Bot;