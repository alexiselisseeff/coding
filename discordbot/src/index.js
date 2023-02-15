require('dotenv').config;
const { token } = require('./config.json');
const { Client, IntentsBitField } = require("discord.js");

// Intents to give the bot permissions
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
    console.log(`✅  ${c.user.username} is online.`);
});

// Listen to messages and reply to it
client.on('messageCreate', (msg) => {
    if (msg.author.bot){ // checking if the author is a bot or not
        return;
    }

    if (msg.content === 'hello'){
        msg.reply('hey!');
    }
}); 

client.login(token);
