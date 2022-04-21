const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playmusic')
        .setDescription('This command will play music from a youtube link.')
        .addStringOption(option =>
            option.setName('youtubelink')
                .setDescription('The youtube link to play music from.')
                .setRequired(true)),
    async execute(interaction) {

    }
}