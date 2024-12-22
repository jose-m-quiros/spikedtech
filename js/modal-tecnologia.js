document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los botones con la clase 'service-btn'
  const serviceButtons = document.querySelectorAll(".service-btn");

  serviceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Obtener el enlace desde el atributo data-link
      const link = this.getAttribute("data-link");

      // Verificar si el enlace existe
      if (link) {
        // Abrir el enlace en una nueva pestaña
        window.open(link, "_blank");
      } else {
        console.error("No se encontró un enlace válido para este servicio.");
      }
    });
  });
});
