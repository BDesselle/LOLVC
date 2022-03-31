require('dotenv').config();

const {Client} = require('discord.js');

const client = new Client({intents: 32767});

require('../Handlers/Events')(client);

/*
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)
});
*/

client.login(process.env.DISCORD_BOT_TOKEN);