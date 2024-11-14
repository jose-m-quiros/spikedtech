// Seleccionar el header y la sección title
const header = document.querySelector("header");
const titleSection = document.querySelector(".title");

// Función para cambiar el fondo del header
function changeHeaderBackground() {
    // Obtener la posición del header y la sección title
    const titleTop = titleSection.getBoundingClientRect().top;
    const headerHeight = header.offsetHeight;

    // Verificar si el header ha alcanzado la sección title
    if (titleTop <= headerHeight) {
        header.style.backgroundColor = "black";
    } else {
        header.style.backgroundColor = ""; // Restablecer color cuando esté fuera de la sección
    }
}

// Escuchar el evento de scroll para activar la función
window.addEventListener("scroll", changeHeaderBackground);
