const { Client, Intents, Permissions } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    permissions: [
        Permissions.FLAGS.GUILD,
        Permissions.FLAGS.MANAGE_CHANNELS
    ],
    partials: ['MESSAGE', 'CHANNEL']
});
module.exports = client;