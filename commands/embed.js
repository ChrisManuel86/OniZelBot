// Create Discord object
const Discord = require('discord.js');

// Create embed object
const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://onijee.minecraftnoob.com/')
    .setAuthor('OniLink86', 'https://onijee.minecraftnoob.com/img/onilink86.png', 'https://onijee.minecraftnoob.com/')
    .setDescription('This is an example embed with different types of parameters')
    .setThumbnail('https://onijee.minecraftnoob.com/img/onilink86.png')
    .addField('Regular field title', 'Text is entered here')
    .addBlankField()
    .addField('Inline field title', 'More text goes here', true)
    .addField('Inline field title', 'More text goes here', true)
    .addField('Inline field title', 'More text goes here', true)
    .setImage('https://onijee.minecraftnoob.com/img/onilink86.png')
    .setTimestamp()
    .setFooter('This is footer text', 'https://onijee.minecraftnoob.com/img/onilink86.png');

module.exports = {
    name: "embed",
    description: "See an example of a Discord embed.",
    execute(channel, embed) {
        channel.send(embed);
    }
};

// This might be a non-working example
// TO-D0: troubleshoot