const { createAudioPlayer } = require('@discordjs/voice');
/**
 * This is the player instance.
 */
class CreatePlayer {
    constructor() {
        this.player = null;
    }
    init() {
        return this.player = createAudioPlayer();
    }
    pause(interaction) {
        this.player.pause();
        interaction.reply({ content: `${interaction.user.username} paused the music.` });
    }
    play(interaction) {
        this.player.unpause();
        interaction.reply({ content: `${interaction.user.username} unpaused the music.` });
    }
    stop(interaction) {
        this.player.stop();
        interaction.reply({ content: `${interaction.user.username} stoped the music.` });
    }
}

const playerInstance = new CreatePlayer();

module.exports = playerInstance;