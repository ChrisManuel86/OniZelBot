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