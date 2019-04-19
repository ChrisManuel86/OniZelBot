const {token, prefix} = require('./config.json');
const discord = require('discord.js');

const bot = new discord.Client();
bot.login(token);

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`);
})

bot.on('message', async message => {
    if (message.content.startsWith(prefix) || message.author.bot) return;
    if (message.channel.name != "bot-testing") return;
    
    const args = message.content.slice(prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();

    if (cmd === `ping`){
        message.channel.send('Pong.');
    } else if (cmd === `beep`) {
        message.channel.send('Boop.');
    } else if (cmd === `server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (cmd === `user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
})