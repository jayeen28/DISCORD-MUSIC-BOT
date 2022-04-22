const { SlashCommandBuilder } = require("@discordjs/builders");
const control = require('../hooks/control');

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
        control[inputedData](interaction);
    }
}