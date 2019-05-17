// Set Discord object and embedColor object
const embedColor = require('../constants.json');
const Discord = require('discord.js');

// Set embed object
let embed = new Discord.RichEmbed();
	embed.setColor(embedColor);

module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
		embed.setTitle(`Server name: ${message.guild.name}`)
			.setField('Total members:', `${message.guild.memberCount}`);
		message.channel.send(embed);
	}
};