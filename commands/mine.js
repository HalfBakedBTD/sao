const Discord = require("discord.js");
const fs = require("fs");
let players = require("../players.json");
let stats = require("../stats.json");
let inv = require("../inv.json");

const claim_cooldown_time = 410;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before mining. You have to wait 6 minutes between foraging.");
  let dieAmt = Math.floor(Math.random() * 9) + 1;   
  let coinGet += dieAmt + stats[maid].mining
  players[maid].coins += coinGet
  let xpDie = Math.floor(Math.random() * 4) + 1;  
  players[maid].xp += xpDie
  let statDie = Math.floor(Math.random() * 9) + 1;  
  if (statDie > 5) {
    stats[maid].mining += 1
  }
  message.channel.send(`<@${message.author.id}> has went mining and managed to find ${coinGet} coins. (+${xpDie}🌟)`);
  
    claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 1000);
}

module.exports.help = {
  name: "mine"
}
