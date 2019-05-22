// Set Discord object and embedColor object
const {embedColor} = require('../constants.json');
const Discord = require('discord.js');

// Set embed object
let embed = new Discord.RichEmbed();

module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
		embed = {
			color: embedColor,
			title: `Server name: ${message.guild.name}`,
			field: [{
				name: 'Total members:',
				value: `${message.guild.memberCount}`
			}]
		};
		console.log(embed);
		message.channel.send(embed);
	}
};