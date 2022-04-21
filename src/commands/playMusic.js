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
        const inputedData = interaction.options._hoistedOptions;
        const youtubeLink = inputedData[0].value;
        const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?/;
        const youtubeLinkMatch = youtubeLink.match(youtubeLinkRegex);
        console.log(youtubeLinkMatch[0])
    }
}