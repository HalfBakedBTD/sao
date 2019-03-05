const Discord = require("discord.js");
const fs = require("fs");
let players = require("../players.json");
let stats = require("../stats.json");
let inv = require("../inv.json");

const claim_cooldown_time = 120;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before foraging. You have to wait 2 minutes between foraging.");
  let dieAmt = Math.floor(Math.random() * 999) + 1;   
  let lootDie = Math.floor(Math.random() * 1) + 1; 
  lootDie = lootDie + stats[maid].foraging
  if (dieAmt > 950) {
    inv[maid].folootbag += 1
    message.channel.send(`<@${message.author.id}> has went foraging and won a Foraging Lootbag.`);
  } else if (dieAmt > 800) {
    inv[maid].wheat += lootDie
    message.channel.send(`<@${message.author.id}> has went foraging and won ${lootDie} wheat.`);
  } else if (dieAmt > 650) {
    inv[maid].fruit += lootDie
    message.channel.send(`<@${message.author.id}> has went foraging and won ${lootDie} fruit.`);
  } else if (dieAmt > 500) {
    inv[maid].root += lootDie
    message.channel.send(`<@${message.author.id}> has went foraging and won ${lootDie} root.`);
  } else if (dieAmt > 350) {
    inv[maid].egg += lootDie
    message.channel.send(`<@${message.author.id}> has went foraging and won ${lootDie} eggs.`);
  } else if (dieAmt > 100) {
    inv[maid].sticks += lootDie
    message.channel.send(`<@${message.author.id}> has went foraging and won ${lootDie} sticks.`);
  } else if (dieAmt > 0) {
    players[maid].coins += lootDie
    message.channel.send(`<@${message.author.id}> has went foraging and won ${lootDie} coins`);
  }
  let forDie = Math.floor(Math.random() * 9) + 1;
  if (forDie > 6) {
    stats[maid].foraging += 1
  }
  let xpDie = Math.floor(Math.random() * 10) + 1;
  if (xpDie > 5) {
    let xpgDie = Math.floor(Math.random() * 9) + 1;
    players[maid].xp += xpgDie
  }
  if (players[maid].quest = 1) {
    let qno = players[maid].quest + 1;
    players[maid].quest = qno
    message.channel.send(`<@${message.author.id}> has just finished quest number one!`);
  }
  
    claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 1000);
}

module.exports.help = {
  name: "forage"
}
