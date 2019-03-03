const Discord = require("discord.js");
let players = require("../players.json");


module.exports.run = async (bot, message, args) => {
  let maid = message.author.id;
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!cUser) {
    if(!players[maid]) {
      return message.channel.send(`You have not yet began to play.`);
    }

    let uCoins = players[maid].coins;
    let uHealth = players[maid].health;
    let uMHealth = players[maid].maxhealth;
    let uLoc = players[maid].loction;
    let uGuild = players[maid].guild;

    //return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**<@${maid}>**\nCoins: ${uCoins}\nHealth: ${uHealth}/${uMHealth}\nLocation: ${uLoc}\nGuild: ${uGuild}`)
    
    return message.channel.send(balEmbed)
  }
  if(!players[cUser.id]) {
    return message.channel.send(`It looks like ${cUser} has not started playing yet.`);
  }
  
  let cName = players[cUser.id].name;
  
  //return message.reply(`**${cUser}** has:\n\n💰 Coins: ${plCoins}\n\n🏦 Bank: ${plBank}\n\n⛹ Net Worth: ${plNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**${cUser}**\n O`)
    
    return message.channel.send(balEmbed)
}

module.exports.help = {
  name: "profile"
}
