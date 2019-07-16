// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');

// Create Discord object
const Discord = require('discord.js');

// create embedError object
let embedError = new Discord.RichEmbed()
    .setColor(parseInt(embedColorValue));

/** module.exports = {
    name: "roles",
    cooldown: 5,
    description: "Choose from the available roles on the server. See #available-roles for additional info on roles.",
    execute(message, args) {
        let { roles } = message.guild;
        // console.log(roles.map(role => role.name));
    },
    execute(message, args) {
        // Create CONST commands object from client command
        const { roles } = message.guild;
        let perms = message.member.permissions;
    
        if (!args.length) {
            // Create embedHelp object
            let embedRoles = new Discord.RichEmbed()
                .setColor(embedColorValue)
                .setTitle('Help Command')
                .setDescription('Here\'s a list of available roles.')
                .addField('Available roles:', roles.map(role => role.name).join(', '))
                .addField('Command usage:', `You can send \`${prefix}help [command name]\` to get info on a specific command!`)
                .addField('Getting a role:', `In order to assign a role to yourself, send "${prefix} give [role name]", and the role will be assigned to you.`)
                .addField('Removing a role:', `To remove a role`);
    
            return message.channel.send(embedRoles);
        } else {
            if (!role) {return message.reply('that role does not exist! Please chose a role from the available ones listed to you.');}
            
            // Create embedCommand object
            let embedRole = new Discord.RichEmbed()
                .setColor(embedColorValue)
                .setTitle('**Command Name:**')
                .setDescription(`${role.name}`)
                .addBlankField();
    
            if (command.aliases) embedRole.addField('**Aliases:**', `${command.aliases.join(', ')}`);
            if (command.description) embedRole.addField('**Description:**', `${command.description}`);
            if (command.usage) embedRole.addField('**Usage:**', `${prefix}${command.name} ${command.usage}`);
    
            embedRole.addField('**Cooldown:**', `${command.cooldown || 3} second(s)`);
            
            return message.channel.send(embedRole);
        }
    }
};
*/

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