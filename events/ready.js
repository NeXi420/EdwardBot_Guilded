"use strict";
const { setup } = require("../database/createDefaultSettings.js");
module.exports = async (bot) => {
    await setup(bot);
    console.log("IS READY! " + bot.user.name);
}