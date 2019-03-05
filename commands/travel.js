const Discord = require("discord.js");
const fs = require("fs");
let players = require("../players.json");
let stats = require("../stats.json");
let inv = require("../inv.json");

const claim_cooldown_time = 120;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  if(isNaN(args[0])) return message.reply("please supply a number of which floor you wish to travel to! Floor 0 is the safezone.");
  let numb = parseInt(args[0]);
  let inp = (Math.floor(numb));
  if (inp > 100) {
    return message.channel.send("There are only 100 floors.");
  }  
  
  if (inp < 0) {
    return message.channel.send("There are only 100 floors.");
  }
  //return message.channel.send(`So you want to go to floor ${inp}...`);
  let access = inp * 10;
  //if (access > players[maid].quest) return message.reply(`, you must complete ${access} quests to reach floor ${inp}.`);
  
 
  if (inp > players[maid].floor) {
    let time = inp - players[maid].floor;
  

    players[maid].tdc = true
    message.channel.send(`You are now traveling to floor ${inp}. This will take ${time} minutes.`);
    claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
      players[maid].floor = inp
      players[maid].tdc = false
    }, time * 60000);
  } else {
    let time = players[maid].floor - inp;
  

    players[maid].tdc = true
    message.channel.send(`You are now traveling to floor ${inp}. This will take ${time} minutes.`);
    claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
      players[maid].floor = inp
      players[maid].tdc = false
    }, time * 60000);
  }
}

module.exports.help = {
  name: "travel"
}
