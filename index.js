import Discord, { Message } from 'discord.js';

const client = new Discord.Client();

const token = require('./config.json');

//SI COPIO ALGO ES APARTIR DE ABAJO

client.on('ready', () => {
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message => {
    if(message.content === 'ping'){
        message.reply('pong');
    }
})

client.login(token);