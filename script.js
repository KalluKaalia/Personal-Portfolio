// # Function to Animate Social Media Tray


function animateTray() {
        const tray = document.querySelector('.social-media-tray');
    
        if (tray.style.opacity === '0' || tray.style.opacity === '') {
            // Fade-in animation
            tray.style.display = 'block';
            setTimeout(() => {
                tray.style.opacity = '1';
            }, 0); // Delay to apply opacity after display changes
        } else {
            // Fade-out animation
            tray.style.opacity = '0';
            setTimeout(() => {
                tray.style.display = 'none';
            }, 500); // Match duration to CSS transition time
        }
    }
    