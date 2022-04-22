const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
    videoToMP3: async (link) => {
        return await new Promise((resolve, reject) => {
            ytdl(link, { filter: 'audioonly' })
                .pipe(fs.createWriteStream('youtubeToAudio.mp3'))
                .on('finish', () => resolve('[+] Finished downloading audio.'))
                .on('error', (err) => reject(err));
        })
    }
}