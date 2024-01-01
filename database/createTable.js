"use strict";
const connect = require("./connect.js");
module.exports.setup = async (bot) => {
    await connect(bot);
    const collections = await bot.db.listCollections().toArray();
    const tableArray = [
        { name: "Settings", indexes: [{ name: "test" }, { name: "guild" }] },
        { name: "Developer", indexes: [{ name: "test" }] }
    ]
    for (const table of tableArray) {
        const coll = await bot.db.collection(table.name);
        if (!collections.find(a => a.name === table.name)) {
            await bot.db.createCollection(table.name);
            console.log(`Table ${table.name} is created!`);
            const indexes = await  coll.listIndexes().toArray();
            for (const index of table.indexes) {
                if (!indexes.find(a => a.name === index.name)) {
                    await coll.createIndex(index.name);
                    console.log(`Index ${index.name} is created!`);
                }
            }
            continue;
        }
        const indexes = await  coll.listIndexes().toArray();
        for (const index of table.indexes) {
            if (!indexes.find(a => a.name === index.name+"_1")) {
                await coll.createIndex(index.name);
                console.log(`Index ${index.name} is created!`);
            }
        }
    }
}