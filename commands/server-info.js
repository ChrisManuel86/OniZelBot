// Set Discord object and embedColor object
const {embedColorHex, blankField} = require('../constants.json');
const Discord = require('discord.js');

// Set embed object
let serverInfoEmbed = new Discord.RichEmbed();

module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
		serverInfoEmbed = {
			color: parseInt(embedColorHex),
			title: `Server name: ${message.guild.name}`,
			fields: [
				{
					name: blankField,
					value: blankField,
					inline: true
				},
				{
					name: 'Total members:',
					value: `${message.guild.memberCount}`,
				}
			],
			timestamp: new Date()
		};
		message.channel.send({embed: serverInfoEmbed});
	}
};