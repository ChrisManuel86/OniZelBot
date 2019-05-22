// Set Discord object and embedColor object
const {embedColorHex} = require('../constants.json');
const Discord = require('discord.js');

// Convert hex value to decimal
let embedColorDecimal = embedColorHex;
embedColorDecimal = parseInt(embedColorDecimal);


// Set embed object
let embed = new Discord.RichEmbed();

module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
		embed = {
			color: embedColorDecimal,
			title: `Server name: ${message.guild.name}`,
			field: [{
				name: 'Total members:',
				value: `${message.guild.memberCount}`
			}]
		};
		message.channel.send({embed: embed});
	}
};