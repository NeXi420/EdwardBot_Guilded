"use strict";
module.exports = {
    setup: async (bot) => {
        const servers = await bot.servers.cache.values();//not working
        console.log(servers);
        for (const server of servers) {
            console.log(server);
            const dataGuild = await bot.db.get(server.id);
            if (!dataGuild) {
                const config = {
                    guildID: server.id,
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
                await bot.db.set(server.id, config)
            }
        }
    },
    addBot: async (bot, guild) => {

    },
    removeBot: async (bot, guild) => {

    }
}