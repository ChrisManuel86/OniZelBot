// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');

// Create Discord object
const Discord = require('discord.js');

module.exports = {
	name: 'Help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		// Create CONST commands object from client command
		const { commands } = message.client;

        if (!args.length) {
			// Create embedHelp object
			let embedHelp = new Discord.RichEmbed()
				.setColor(embedColorValue)
				.setTitle('Help Command')
				.setDescription('Here\'s a list of all my commands:')
				.addField('Command Usage', `You can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.channel.send(embedHelp);
		} else {
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {return message.reply('that\'s not a valid command!');}			
			
			// Create embedCommand object
			let embedCommand = new Discord.RichEmbed()
				.setColor(embedColorValue)
				.setTitle('**Command Name:**')
				.setDescription(`${command.name}`)
				.addBlankField();

			if (command.aliases) embedCommand.addField('**Aliases:**', `${command.aliases.join(', ')}`);
			if (command.description) embedCommand.addField('**Description:**', `${command.description}`);
			if (command.usage) embedCommand.addField('**Usage:**', `${prefix}${command.name} ${command.usage}`);

			embedCommand.addField('**Cooldown:**', `${command.cooldown || 3} second(s)`);
			
			return message.channel.send(embedCommand);
		}
	}
};