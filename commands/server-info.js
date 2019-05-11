// Set Discord object
const Discord = require('discord.js');

// Set embed object
let embed = new Discord.RichEmbed()
	.setColor('#0099ff');

module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		embed.setTitle(`Server name: ${message.guild.name}`)
			.setField('Total members:', `${message.guild.memberCount}`);
		message.channel.send(embed);
	}
};