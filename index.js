require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === '!test') {
        message.reply('👋 البوت شغال يا صديقي!');
    }

    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }

    if (message.content === '!hello') {
        message.reply('😄 هلا والله!');
    }
});

client.login(process.env.TOKEN);
