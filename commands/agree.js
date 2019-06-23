// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');

// Create Discord object
const Discord = require('discord.js');

// Set Townsfolk Role to variable
let townsfolkRole = "356928973902708738";

module.exports = {
    name: "agree",
    description: "Give user the townsfolk role after they have agreed to the rules.",
    execute(message) {
        if (message.channel.name !== "bot-testing") return;
        else {
            message.member.addRole(townsfolkRole).catch(console.error);
        }
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