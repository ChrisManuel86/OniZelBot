// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');

// Create Discord object
const Discord = require('discord.js');

// Create embedHelp object
let embedHelp = new Discord.RichEmbed()
	.setColor('#0099ff');

// Create embedCommand object
let embedCommand = new Discord.RichEmbed()
	.setColor('#0099ff');

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
				.addField('Available Commands' ,commands.map(command => command.name).join(', '))
				.addField('Command Usage', `You can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.channel.send(embedHelp);
		}
		console.log(args[0]);
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		
		if (!command) {return message.reply('that\'s not a valid command!');}

		embedCommand.setTitle('**Name:**')
			.setDescription(`${command.name}`);

		if (command.aliases) embedCommand.addField('**Aliases:**', `${command.aliases.join(', ')}`);
		if (command.description) embedCommand.addField('**Description:**', `${command.description}`);
		if (command.usage) embedCommand.addField('**Usage:**', `${prefix}${command.name} ${command.usage}`);

		embedCommand.addField('**Cooldown:**', `${command.cooldown || 3} second(s)`);
		
		message.channel.send(embedCommand);
	}
};