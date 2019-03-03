const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send("NO! I DON'T LIKE YOU!");
}

module.exports.help = {
  name: "help"
}
