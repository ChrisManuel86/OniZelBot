// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');

// Create Discord object
const Discord = require('discord.js');

// create embedError object
let embedError = new Discord.RichEmbed()
    .setColor(parseInt(embedColorValue));
/*
module.exports = {
    name: "roles",
    cooldown: 5,
    description: "Choose from the available roles on the server. See #available-roles for additional info on roles.",
    execute(message) {
        // Create CONST commands object from client command
        const { roles } = message.guild;
        
        function removeNoneAvaileableRoles(role) {
            switch (role.name) {
                case "@everyone":
                    break;
                case 'Hylian Royal Gaurd':
                    break;
                case 'OniMinions':
                    break;
                case 'Admin':
                    break;
                case 'Now Live':
                    break;
                case 'Automatonic Overlords':
                    break;
                case 'OniFiance':
                    break;
                case 'Naughty Hylians':
                    break;
                case 'OniZelBot':
                    break;
                case '1 Hylian Year Older':
                    break;
                case "":
                    break;
                default:
                    return role.name;
                };
        };

        let embedRoles = new Discord.RichEmbed()
            .setColor(embedColorValue)
            .setTitle('Help Command')
            .setDescription('Here\'s a list of available roles.')
            .addField('Available roles:', roles.map(removeNoneAvaileableRoles))
            .addField('Getting a role:', `In order to assign a role to yourself, send "${prefix}give [role name]", and the role will be assigned to you.`)
    
        return message.channel.send(embedRoles);
    }
};
*/