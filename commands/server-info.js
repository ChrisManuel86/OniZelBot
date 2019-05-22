// Set Discord object and embedColor object
const {embedColorHex} = require('../constants.json');
const Discord = require('discord.js');

// Set embed object
let embed = new Discord.RichEmbed();

module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
		embed = {
			color: parseInt(embedColorHex),
			title: `Server name: ${message.guild.name}`,
			field: [{
				name: 'Total members:',
				value: `${message.guild.memberCount}`
			}],
			timestamp: new Date()
		};
		message.channel.send({embed: embed});
	}
};