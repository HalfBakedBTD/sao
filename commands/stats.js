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
    let uAL = stats[maid].alertness;
    let uLUCK = stats[maid].luck;
    let uFOR = stats[maid].foraging;

    //return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**<@${maid}>**\nAttack: ${uAT}\nDefence: ${uDEF}\nLooting: ${uLOOT}\nFishing: ${uFISH}\nForaging: ${uFOR}\nAgility: ${uAG}\nAlertness: ${uAL}\nLuck: ${uLUCK}`);
    
    return message.channel.send(balEmbed)
  }
  if(!stats[cUser.id]) {
    return message.channel.send(`It looks like ${cUser} has not started playing yet.`);
  }
  let pAT = stats[cUser.id].attack;
  let pDEF = stats[cUser.id].defence;
  let pFISH = stats[cUser.id].fishing;
  let pLOOT = stats[cUser.id].looting;
  let pAG = stats[cUser.id].agility;
  let pAL = stats[cUser.id].alertness;
  let pLUCK = stats[cUser.id].luck;
  let pFOR = stats[cUser.id].foraging;

    //return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`**${cUser}**\nAttack: ${pAT}\nDefence: ${pDEF}\nLooting: ${pLOOT}\nFishing: ${pFISH}\nForaging: ${pFOR}\nAgility: ${pAG}\nAlertness: ${pAL}\nLuck: ${pLUCK}`);
    
    return message.channel.send(balEmbed)
  
}

module.exports.help = {
  name: "stats"
}
