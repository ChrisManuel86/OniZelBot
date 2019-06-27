// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');

// Create Discord object
const Discord = require('discord.js');

// create embedError object
let embedError = new Discord.RichEmbed()
    .setColor(parseInt(embedColorValue));

module.exports = {
    name: "Roles",
    description: "Choose from the available roles on the server. See #available-roles for additional info on roles.",
    execute(message, args) {
        message.channel.send("This command hasn't been fully implemented yet. Please check back later.")
    }
};


/*
	usage: '[roles name]',
	cooldown: 5,
	execute(message, args) {
        const { commands } = message.client;

        if (!args.length) {
			embedHelp.setTitle('Help Command')
				.setDescription('Here\'s a list of all my commands:')
				.addField('' ,commands.map(command => command.name).join(', '))
				.addBlankField()
				.addField('Command Usage', `You can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.channel.send(embedHelp);
        }
*/