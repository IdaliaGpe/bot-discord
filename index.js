import Discord, { Message } from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMjY1ODk1NDQ0NTAw.X3tJJg.n0Yq6vtGqIOQJb88ZXvmePuPOxU';

//SI COPIO ALGO ES APARTIR DE ABAJO

client.on('ready', () => {
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message => {
    if(message.content === 'ping'){
        message.reply('pong');
    }
})

client.login(TOKEN_API);