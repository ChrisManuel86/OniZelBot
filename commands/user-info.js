// Set Discord object and embedColor object
const {embedColorHex} = require('../constants.json');
const Discord = require('discord.js');

// Set embed object
let userInfoEmbed = new Discord.RichEmbed();

module.exports = {
	name: 'User Info',
	description: 'Display info about yourself.',
	execute(message) {
		userInfoEmbed = {
			color: parseInt(embedColorHex),
			title: "Your User Info!",
			fields: [
				{
					name: "Your username:",
					value: `${message.author.username}`
				},
				{
					name: "Your ID:",
					value: `${message.author.id}`
				}
			]
		}
		message.channel.send({embed: userInfoEmbed});
	}
};