const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgwOTQyMTMyOTk0OTAwMDU5.XlHsRg.0TnCkpOcMsJWWmYm4I9QewhSUsU';

const PREFIX = '!!';

var version = '1.0.9';


bot.on('ready', () => {
    console.log('Ryyan just got updated.');
    bot.user.setActivity('slow jazz', {
        type: 'LISTENING'
    }).catch(console.error);


})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel!`)
});





bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.reply('pong!');
            break;
        case 'hello':
            message.reply('Hello there!');
            break;
        }
});

        bot.login(token);