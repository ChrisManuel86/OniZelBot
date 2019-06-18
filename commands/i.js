// Set Discord object and embedColor object
const {embedColorHex} = require('../constants.json');
const Discord = require('discord.js');

// Set embed object
let agreeEmbed = new Discord.RichEmbed();

module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		agreeEmbed = {
			color: parseInt(embedColorHex),
			title: "Welcome to the OniFam!!",
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
		message.channel.send({embed: agreeEmbed});
	}
};