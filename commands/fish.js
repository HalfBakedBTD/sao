const Discord = require("discord.js");
const fs = require("fs");
let players = require("../players.json");
let stats = require("../stats.json");
let inv = require("../inv.json");

const claim_cooldown_time = 120;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before foraging. You have to wait 2 minutes between fishing.");
  let dieAmt = Math.floor(Math.random() * 999) + 1;   
  let lootDie = Math.floor(Math.random() * 1) + 1; 
  lootDie = lootDie + stats[maid].fishing
  if (dieAmt > 980) {
    inv[maid].filootbag += 1
    message.channel.send(`<@${message.author.id}> has went fishing and hooked a Fishing Lootbag.`);
  } else if (dieAmt > 540) {
    inv[maid].fish += lootDie
    message.channel.send(`<@${message.author.id}> has went fishing and hooked ${lootDie} fish.`);
  } else if (dieAmt > 250) {
    inv[maid].bfish += lootDie
    message.channel.send(`<@${message.author.id}> has went fishing and hooked ${lootDie} big fish.`);
  } else if (dieAmt > 225) {
    players[maid].coins += lootDie
    message.channel.send(`<@${message.author.id}> has went fishing and hooked a coinbag with ${lootDie} coins.`);
  } else if (dieAmt > 100) {
    inv[maid].trash += lootDie
    message.channel.send(`<@${message.author.id}> has went fishing and hooked ${lootDie} trash.`);
  } else if (dieAmt > 0) {
    inv[maid].sticks += lootDie
    message.channel.send(`<@${message.author.id}> has went fishing and hooked a bush. You collected ${lootDie} sticks.`);
  } 
  let forDie = Math.floor(Math.random() * 9) + 1;
  if (forDie > 5) {
    stats[maid].fishing += 1
  }
  let xpDie = Math.floor(Math.random() * 10) + 1;
  if (xpDie > 5) {
    let xpgDie = Math.floor(Math.random() * 9) + 1;
    players[maid].xp += xpgDie
  }
  if (players[maid].quest < 3) {
    let qno = players[maid].quest + 1;
    players[maid].quest = qno
    message.channel.send(`<@${message.author.id}> has just finished quest number two!`);
  }
    claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 1000);
}

module.exports.help = {
  name: "fish"
}
