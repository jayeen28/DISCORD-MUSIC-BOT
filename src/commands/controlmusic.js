const { SlashCommandBuilder } = require("@discordjs/builders");
const playerInstance = require('../hooks/player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('controlmusic')
        .setDescription('This command can used for pause unpause and stopping the music.')
        .addStringOption(option =>
            option.setName('action')
                .setDescription('The action you want to execute (pause/unpause/stop).')
                .setRequired(true)
        ),
    async execute(interaction) {
        const inputedData = interaction.options._hoistedOptions[0].value;
        const isValid = ['pause', 'play', 'stop'].includes(inputedData);
        if (!isValid) return interaction.reply({ content: 'Invalid action.', ephemeral: true });
        playerInstance[inputedData](interaction);
    }
}