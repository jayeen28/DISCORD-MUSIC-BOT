const { joinVoiceChannel, VoiceConnectionStatus, createAudioPlayer, AudioPlayerStatus, createAudioResource } = require('@discordjs/voice');

module.exports = {
    handleVC: (interaction) => {
        const connection = joinVoiceChannel({
            channelId: process.env.VC_ID,
            guildId: process.env.GUILD_ID,
            adapterCreator: interaction.member.guild.voiceAdapterCreator,
        });

        const music = createAudioResource('youtubeToAudio.mp3');
        connection.on(VoiceConnectionStatus.Ready, () => {
            console.log('[+] Connected to voice channel.');
        })
        const player = createAudioPlayer();
        connection.subscribe(player)
        player.on('error', (err) => console.log(err))
        player.play(music)
        player.on(AudioPlayerStatus.Playing, () => {
            console.log('[+] Started playing audio.');
        })
        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
        })
    }
}