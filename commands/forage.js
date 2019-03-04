const Discord = require("discord.js");
const fs = require("fs");
let players = require("../players.json");

const claim_cooldown_time = 4;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before foraging. You have to wait 4 minutes between foraging.");
    message.channel.send("You went foraging but because there is no inventory you have gained nothing.");
    
    claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 60000);
}

module.exports.help = {
  name: "forage"
}
