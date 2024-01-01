"use strict";
module.exports = {
    setup: async (bot) => {
        const servers = await bot.servers.cache.values();
        for (const server of servers) {
            const dataServer = await bot.db.collection("Settings").findOne({ _id: server.id });
            if (!dataServer) {
                const config = {
                    _id: server.id,
                    prefix: "!",
                    lang: "pl",
                    embed: "#563d7c",
                    economy: {
                        symbol: "zł",
                        cooldown: {
                            work: 60000,
                            mine: 60000,
                            fish: 60000,
                            rob: 60000
                        }
                    },
                    levels: {
                        multiplier: 1
                    },
                    starboards: {
                        channelID: false
                    }
                }
                await bot.db.collection("Settings").insertOne(config);
            }
        }
    },
    addBot: async (bot, guild) => {

    },
    removeBot: async (bot, guild) => {

    }
}