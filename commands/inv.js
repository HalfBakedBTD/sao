const Discord = require("discord.js");
let stats = require("../stats.json");
let inv = require("../inv.json");


module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**__<@${message.author.id}>'s Inventory:__**\n\n**Foraging Items:**\nWheat: ${inv[maid].wheat}\nEggs: ${inv[maid].egg}\nFruit: ${inv[maid].fruit}\nRoot: ${inv[maid].root}\nSticks: ${inv[maid].sticks}\nForaging Lootbag: ${inv[maid].folootbag}\n\n**Fishing Items:**\nFish: ${inv[maid].fish}\nBig Fish: ${inv[maid].bfish}\nTrash: ${inv[maid].trash}\nFishing Lootbag: ${inv[maid].filootbag}`);
    
    message.channel.send("I am privately messaging you your inventory.");
    return message.author.send(balEmbed)
}

module.exports.help = {
  name: "inv"
}
