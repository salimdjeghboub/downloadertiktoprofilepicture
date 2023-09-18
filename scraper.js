const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function downloadTikTokProfilePicture(username) {
    try {
        const profileUrl = `https://www.tiktok.com/@${username}`;
        const response = await axios.get(profileUrl);

        if (response.status !== 200) {
            throw new Error('Failed to fetch TikTok profile');
        }

        const $ = cheerio.load(response.data);
        const profilePictureUrl = $('meta[property="og:image"]').attr('content');

        if (!profilePictureUrl) {
            throw new Error('Profile picture URL not found');
        }

        const imageResponse = await axios.get(profilePictureUrl, { responseType: 'stream' });
        const imageName = `${username}_profile_picture.jpg`;
        const imageStream = imageResponse.data.pipe(fs.createWriteStream(imageName));

        return new Promise((resolve, reject) => {
            imageStream.on('finish', () => resolve(imageName));
            imageStream.on('error', reject);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const username = 'tiktok_username'; // Replace with the TikTok username you want to download the profile picture for
downloadTikTokProfilePicture(username)
    .then((imageName) => console.log(`Profile picture saved as ${imageName}`))
    .catch((error) => console.error('Failed to download profile picture:', error));
