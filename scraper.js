document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');
    const tiktokUsername = document.getElementById('tiktokUsername');
    const resultDiv = document.getElementById('result');

    downloadButton.addEventListener('click', () => {
        const username = tiktokUsername.value.trim();

        if (!username) {
            resultDiv.innerHTML = 'Please enter a TikTok username.';
            return;
        }

        // Execute the scraper.js script using child_process
        const { exec } = require('child_process');
        const command = `node scraper.js ${username}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                resultDiv.innerHTML = 'Failed to download profile picture.';
                console.error('Error:', error.message);
                return;
            }

            resultDiv.innerHTML = 'Profile picture downloaded.';
        });
    });
});
