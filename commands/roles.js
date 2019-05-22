// Initialize prefix variable for use in this file
const { prefix } = require('../config.json');
const { embedColorValue } = require('../constants.json');

// Create Discord object
const Discord = require('discord.js');

// create embedError object
let embedError = new Discord.RichEmbed()
    .setColor(parseInt(embedColorValue));

module.exports = {
    name: "roles",
    description: "Choose from the available roles on the server. See #available-roles for additional info on roles.",
    execute(message, args) {
        message.channel.send("This command hasn't been fully implemented yet. Please check back later.")
    }
};