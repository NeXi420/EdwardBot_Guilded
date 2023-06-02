"use strict";
module.exports = {
    cooldown: (bot, cmd, id) => {
        const ISdone = bot.cooldowns.get(`${id}/${cmd.config.name}`);
        const time = (cmd.config.cooldown*1000)+Date.now();
        if (cmd.config.cooldown !== 0) {
            if (!ISdone) {
                bot.cooldowns.set(`${id}/${cmd.config.name}`, time);
                return { done: true };
            }
            if (ISdone<=Date.now()) {
                bot.cooldowns.set(`${id}/${cmd.config.name}`, time);
                return { done: true };
            }
            if (!isNaN(ISdone)) return {
                done: false,
                time: ((ISdone-Date.now())/1000).toFixed(2)
            };
        } else {
            return { done: true };
        }
    }
}