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

        // Create a hidden <a> element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = profilePictureUrl;
        downloadLink.download = `${username}_profile_picture.jpg`; // You can set the desired file name here

        // Trigger the download
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        resultDiv.innerHTML = 'Profile picture downloaded.';
    });
});
