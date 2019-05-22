// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');


// Create Discord object
const Discord = require('discord.js');

// Create embedHelp object
let embedHelp = new Discord.RichEmbed()
	.setColor(embedColorValue);

// Create embedCommand object
let embedCommand = new Discord.RichEmbed()
	.setColor(embedColorValue);

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const { commands } = message.client;

        if (!args.length) {
			embedHelp.setTitle('Help Command')
				.setDescription('Here\'s a list of all my commands:')
				.addBlankField()
				.addField('Available Commands' ,commands.map(command => command.name).join(', '))
				.addField('Command Usage', `You can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.channel.send(embedHelp);
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		
		if (!command) {return message.reply('that\'s not a valid command!');}

		embedCommand.setTitle('**Command Name:**')
			.setDescription(`${command.name}`)
			.addBlankField();

		if (command.aliases) embedCommand.addField('**Aliases:**', `${command.aliases.join(', ')}`);
		if (command.description) embedCommand.addField('**Description:**', `${command.description}`);
		if (command.usage) embedCommand.addField('**Usage:**', `${prefix}${command.name} ${command.usage}`);

		embedCommand.addField('**Cooldown:**', `${command.cooldown || 3} second(s)`);
		
		message.channel.send(embedCommand);
	}
};