const { player } = require('./player');

module.exports = {
    pause: async interaction => {
        player.pause();
        interaction.reply({ content: 'Music paused', ephemeral: true });
    },
    play: async interaction => {
        player.unpause();
        interaction.reply({ content: 'Music unpaused', ephemeral: true });
    },
    stop: async interaction => {
        player.stop();
        interaction.reply({ content: 'Music stopped', ephemeral: true });
    }
}