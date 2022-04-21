require('dotenv').config();
const client = require('./client/client');
const regCommands = require('./hooks/regCommands');
require('./client/interactions/interactions');

client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
    console.log("[+] Bot is ready");
    regCommands();
});