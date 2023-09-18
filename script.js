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

        // Construct the TikTok profile picture URL
        const profilePictureUrl = `https://www.tiktok.com/@${username}`;

        // Open the profile picture URL in a new tab
        window.open(profilePictureUrl, '_blank');

        resultDiv.innerHTML = 'Profile picture opened in a new tab.';
    });
});
