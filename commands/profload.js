const Discord = require("discord.js");
let players = require("../players.json");


module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  if (maid != '487707042224799757') {
    return message.channel.send('You may not use this command.');
  }
  fewjjifunhiuqhniufe
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!cUser) {
   return message.channel.send("Add user input!");
  }
  if(!players[cUser.id]) {
    players[cUser.id] = {
      coins: 0,
      health: 50,
      maxhealth: 50,
      loction: "Safezone",
      guild: "None",
      lvl: 1,
      xp: 0,
      lvlxp: 50,
      ct: false,
      quest: 1
    }
    return message.channel.send('User is now regestered into the system.');
  } else {
    return message.channel.send("That user is already in the system.");
  }
}

module.exports.help = {
  name: "loadprofile"
}
