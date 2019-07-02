// Initilize web server?
// require('./server.js');

// Initialize file stream reader
const fs = require('fs');
// Initialize token, and prefix variables
const {token, prefix} = require('./config.json');

// Initialize Discord variable
const Discord = require('discord.js');

// Initialize client (bot) variable
const client = new Discord.Client();
// Create a new collection of commands
client.commands = new Discord.Collection();
// Read the commends directory using the file stream, and set each file as a value in an array  
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Loop through the array and, for each file in the array, set it as it's own command
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

// Upon receiving a message in any channel, check the following conditions
client.on('message', message => {
	// If the message doesn't start with the prefix, or is from the bot itself, ignore the message
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// If the message is not in the channel "bot-testing", ignore the message
    if (message.channel.name != "bot-testing") return;
	
	// Initialize args variable by anylizing the message sent for any additional words after the prefix, and command word, then separate them out based upon the number of spaces
	const args = message.content.slice(prefix.length).split(/ +/);
	// Initialize a commandName varibale, and change it to lowercase
    const commandName = args.shift().toLowerCase();

	// If the command is not in the list of commands, break from the function
	if (!client.commands.has(commandName)) return;
	
	// If the command is present, create a command using the commandName variable
	const command = client.commands.get(commandName);

	// Try and execute the command, if there's an error, catch it and continue running, then display the error followed by a reply message in chat 
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Send message to join-leave-log indicating when a new member joins the server
client.on("guildMemberAdd", (member) => {
	member.guild.channels.find(c => c.name === "join-leave-log").send(`"${member.user.username}" has joined the server.`);
});

// Send message to join-leave-log indicating when a new member leaves the server
client.on("guildMemberRemove", (member) => {
	member.guild.channels.find(c => c.name === "join-leave-log").send(`"${member.user.username}" has left the server.`);
});

// Capture all client error messages and print to console
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

// Log into the discord server
client.login(token);

// Once the client is ready, display (in the console) that the bot is online.
client.on('ready', () => {
	console.log(`${client.user.username} is online!`);
	client.user.setActivity("over Hyrule", {type: "WATCHING"});
});