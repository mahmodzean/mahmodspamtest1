const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("518420571638202386")
setInterval(function() {
channel.send(`احبك محمود`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
