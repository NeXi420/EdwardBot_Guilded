"use strict";
const { Client,CacheCollection } = require("guilded.js");
const connect = require("../database/connect.js");
const config = require("../config/config.js");
class Bot extends Client {
    constructor() {
        super({
            token: config.token,
        });
        this.commands = new CacheCollection();
        this.aliases = new CacheCollection();
        this.langs = new CacheCollection();
        this.cooldowns = new CacheCollection();
        this.db = connect(this);
    }
}
module.exports = Bot;