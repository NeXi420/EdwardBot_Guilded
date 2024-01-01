"use strict";
const { Client, CacheCollection } = require("guilded.js");
const config = require("../config/config.js");
class Bot extends Client {
    constructor() {
        super({
            token: config.token,
            cache: {
                cacheCalendars: false,
                cacheCalendarsRsvps: false,
                cacheChannels: true,
                cacheForumTopics: false,
                cacheMemberBans: true,
                cacheMessageReactions: true,
                cacheMessages: true,
                cacheServers: true,
                cacheSocialLinks: false,
                cacheWebhooks: true,
                fetchMessageAuthorOnCreate: true,
                removeCalendarRsvpOnDelete: true,
                removeCalendarsOnDelete: true,
                removeChannelOnDelete: true,
                removeMemberBanOnUnban: true,
                removeMemberOnLeave: true,
            }
        });
        this.commands = new CacheCollection();
        this.aliases = new CacheCollection();
        this.langs = new CacheCollection();
        this.cooldowns = new CacheCollection();
        this.db;
    }
}
module.exports = Bot;