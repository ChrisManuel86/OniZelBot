module.exports = {
    name: "Disagree",
    description: "Boot a user after they have disagreed with the rules in '#waiting-room'.",
    execute(message) {
        message.member.kick("You have chosen not to agree to the rules of the server using the !disagree command, therefore you have been booted.");
    }
};