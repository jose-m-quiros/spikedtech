document.addEventListener('DOMContentLoaded', function () {
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            
            if (link) {
                window.open(link, '_blank');
            } else {
                console.error('No se encontró un enlace válido para este servicio.');
            }
        });
    });
});
