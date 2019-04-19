const botsettings = require('./botsettings.json');
const discord = require('discord.js');

const bot = new discord.Client();
bot.login(botsettings.token);

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`);
})

bot.on('message', async message => {
    if(message.channel.name != "bot-testing"){
        return;
    }
    
    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ping`){
        return message.channel.send("pong!");
    }
})