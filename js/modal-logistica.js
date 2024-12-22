document.querySelectorAll('.platform-btn').forEach(button => {
    button.addEventListener('click', () => {
        const platformLink = button.getAttribute('data-link');
        window.open(platformLink, '_blank'); 
    });
});