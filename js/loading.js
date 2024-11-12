// Wait 2.5 seconds before removing the loading screen
setTimeout(() => {
    // Hide the loading screen
    document.querySelector(".loading-screen").style.display = "none";
    // Show the main content
    document.querySelector(".main-content").classList.add("loaded");
}, 2500);
