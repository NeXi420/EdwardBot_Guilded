"use strict";
module.exports = async (bot, message) => {
    if (message.content === "!test") message.channel.send("test");
}