function showVideo(videoUrl) {
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.autoplay = true;
    videoElement.loop = true; // Loop the video
    videoElement.controls = false; // No controls
    videoElement.playsInline = true; // Prevent fullscreen on mobile
    videoElement.setAttribute('webkit-playsinline', ''); // Prevent fullscreen on mobile
    videoElement.style.position = 'fixed';
    videoElement.style.top = '50%';
    videoElement.style.left = '50%';
    videoElement.style.transform = 'translate(-50%, -50%)';
    videoElement.style.zIndex = '9999'; // Ensure it's on top
    videoElement.style.width = '400px'; // Set a larger width for visibility
    videoElement.style.height = '400px'; // Set a larger height for visibility
    
    document.body.appendChild(videoElement);

    // Handle video error
    videoElement.onerror = function() {
        console.error("Failed to load video. Check the URL:", videoUrl);
    };

    console.log("Video element created and added to the DOM.");

    // Remove the video after 13 seconds
    setTimeout(function() {
        if (videoElement && videoElement.parentNode) {
            videoElement.remove();
            console.log("Video removed after 13 seconds");
        }
    }, 13000);
}

// Function to show the video after a delay
function showVideoAfterDelay() {
    console.log("Connection established.");
    
    // Show the video
    showVideo('images/guide.mp4'); // Ensure this path is correct
}

// Function to start the 13-second countdown after user interaction
function startCountdownOnInteraction() {
    console.log("User interaction detected. Starting countdown...");
    
    // Wait for 13 seconds after interaction, then show the video
    setTimeout(showVideoAfterDelay, 10000);
    
    // Remove event listeners to avoid multiple triggers
    document.removeEventListener('click', startCountdownOnInteraction);
    document.removeEventListener('keydown', startCountdownOnInteraction);
}

document.addEventListener('DOMContentLoaded', function() {
    // Wait for user interaction before starting the countdown
    document.addEventListener('click', startCountdownOnInteraction);
    document.addEventListener('keydown', startCountdownOnInteraction);

    document.getElementById('claim-button').addEventListener('click', function() {
        // You can add any additional functionality here for the button click if needed
        console.log("Claim button clicked.");
    });
});
