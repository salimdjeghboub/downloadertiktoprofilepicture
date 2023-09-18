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
        const profilePictureUrl = 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/029bafaf4d492835e941edf9d6f544e5~c5_100x100.jpeg?x-expires=1695171600&x-signature=bMWQkLTaed7R6AYFvn0A7lZmkhM%3D';

        // Open the profile picture URL in a new tab
        window.open(profilePictureUrl, '_blank');

        resultDiv.innerHTML = 'Profile picture opened in a new tab.';
    });
});
