const Discord = require("discord.js");
const fs = require("fs");
let players = require("../players.json");
let stats = require("../stats.json");
let inv = require("../inv.json");

module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  if (players[maid].quest < 2) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\nGo foraging with the command \`.forage\` to find new items!`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  }else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  } else if (players[maid].quest = 1) {
    return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  }  





 
  //else if (players[maid].quest = 1) {
    //return message.channel.send(`**${message.author}'s Quest:** Quest number ${players[maid].quest}.\n`);
  //}  
}

module.exports.help = {
  name: "quest"
}
