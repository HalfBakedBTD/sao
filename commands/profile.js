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
    let uLoc = players[maid].floor;
    let uGuild = players[maid].guild;
    let uLvl = players[maid].lvl;
    let uXP = players[maid].xp;
    let uXPLVL = players[maid].lvlxp;

    //return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**<@${maid}>**\nCoins: ${uCoins}\nHealth: ${uHealth}/${uMHealth}\nFloor: ${uLoc}\nGuild: ${uGuild}\nLevel: ${uLvl}\nXP: ${uXP}/${uXPLVL}`)
    
    return message.channel.send(balEmbed)
  }
  if(!players[cUser.id]) {
    return message.channel.send(`It looks like ${cUser} has not started playing yet.`);
  }
  let cid = cUser.id;
  let cCoins = players[cid].coins;
  let cHealth = players[cid].health;
  let cMHealth = players[cid].maxhealth;
  let cLoc = players[cid].floor;
  let cGuild = players[cid].guild;
  let cLvl = players[cid].lvl;
  let cXP = players[cid].xp;
  let cXPLVL = players[cid].lvlxp;
  
  //return message.reply(`**${cUser}** has:\n\n💰 Coins: ${plCoins}\n\n🏦 Bank: ${plBank}\n\n⛹ Net Worth: ${plNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**${cUser}**\nCoins: ${cCoins}\nHealth: ${cHealth}/${cMHealth}\nLocation: ${cLoc}\nGuild: ${cGuild}\nLevel: ${cLvl}\nXP: ${cXP}/${cXPLVL}`)
    
    return message.channel.send(balEmbed)
}

module.exports.help = {
  name: "profile"
}
