"use strict";
module.exports = async (bot, message) => {
    if (message.content === "!test") await message.send("test");
}