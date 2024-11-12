// Wait for the page to be fully loaded
window.onload = () => {
    setTimeout(() => {
        // Show the container and start the animation
        const typingWrapper = document.querySelector(".typing-wrapper");

        // Check if the container exists
        if (typingWrapper) {
            typingWrapper.style.display = "inline-block"; // Show the container
            typingWrapper.classList.add("start-animation"); // Start the animation
        } else {
            console.error("The container was not found.");
        }
    }, 900);
};

