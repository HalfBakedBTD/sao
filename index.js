const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let players = require("./players.json");
let bounty = require("./bounty.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setGame("//help");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(`${prefix}`)) {
    return
  }
  
  let maid = message.author.id;
  
  if(!players[maid]) {
    players[maid] = {
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
  }
  
  if(!bounty[maid]) {
    bounty[maid] = {
      kills: 0
    }
  }
  
  while (players[maid].xp > players[maid].lvlxp) {
    players[maid].xp -= players[maid].lvlxp
    players[maid].lvlxp = players[maid].lvlxp * 2
    players[maid].health += 50
    players[maid].maxhealth += 50
    players[maid].coins += 5 * players[maid].lvl
    message.channel.send(`<@${maid}> is now level ${players[maid].level}!`)
  }
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 
});

bot.login(process.env.BOT_TOKEN);
