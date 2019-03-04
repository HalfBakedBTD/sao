const Discord = require("discord.js");
let stats = require("../stats.json");


module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!cUser) {
    if(!stats[maid]) {
      return message.channel.send(`You have not yet began to play.`);
    }

    let uAT = stats[maid].attack;
    let uDEF = stats[maid].defence;
    let uFISH = stats[maid].fishing;
    let uLOOT = stats[maid].looting;
    let uAG = stats[maid].agility;
    let uALL = stats[maid].allertness;
    let uLUCK = stats[maid].luck;

    //return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**<@${maid}>**\n`)
    
    return message.channel.send(balEmbed)
  }
  if(!stats[cUser.id]) {
    return message.channel.send(`It looks like ${cUser} has not started playing yet.`);
  }
  
}

module.exports.help = {
  name: "profile"
}
