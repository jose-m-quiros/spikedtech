function actualizarDescripcion() {
    const mensajes = document.getElementById("mensajes-spikedtech");
    const descripcion = document.getElementById("descripcion-spikedtech");

    if (mensajes.value) {
        descripcion.value = mensajes.value;
        descripcion.disabled = true;
    } else {
        descripcion.value = "";
        descripcion.disabled = false;
    }
}

// Nueva función para actualizar los mensajes según el servicio seleccionado
function actualizarMensajesSegunServicio() {
    const servicioSelect = document.getElementById("servicio-spikedtech");
    const mensajesSelect = document.getElementById("mensajes-spikedtech");
    const descripcion = document.getElementById("descripcion-spikedtech");

    // Limpiar el textarea y habilitarlo cuando cambie el servicio
    descripcion.value = "";
    descripcion.disabled = false;

    // Opciones por defecto (para todos los servicios excepto Productos Disponibles)
    const opcionesNormales = [
        {value: "", text: "Seleccione un mensaje preescrito..."},
        {value: "Deseo que me contacten para obtener más información.", text: "Deseo que me contacten para obtener más información."},
        {value: "Quiero recibir una cotización de sus servicios.", text: "Quiero recibir una cotización de sus servicios."},
        {value: "Estoy interesado en sus productos disponibles.", text: "Estoy interesado en sus productos disponibles."},
        {value: "Tengo dudas sobre el soporte técnico que ofrecen.", text: "Tengo dudas sobre el soporte técnico que ofrecen."}
    ];

    // Opciones para Productos Disponibles
    const opcionesProductos = [
        {value: "", text: "Seleccione un mensaje preescrito..."},
        {value: "Deseo que me contacten para obtener más información.", text: "Deseo que me contacten para obtener más información."},
        {value: "Quiero recibir una cotización de sus Productos.", text: "Quiero recibir una cotización de sus Productos."},
        {value: "Estoy interesado en sus productos disponibles.", text: "Estoy interesado en sus productos disponibles."}
    ];

    // Limpiar las opciones actuales
    mensajesSelect.innerHTML = "";

    // Seleccionar qué opciones usar
    const opciones = servicioSelect.value === "Productos Disponibles" ? opcionesProductos : opcionesNormales;

    // Agregar las nuevas opciones
    opciones.forEach(opcion => {
        const optionElement = document.createElement("option");
        optionElement.value = opcion.value;
        optionElement.textContent = opcion.text;
        mensajesSelect.appendChild(optionElement);
    });
}

// Agregar el event listener al select de servicios
document.getElementById("servicio-spikedtech").addEventListener("change", actualizarMensajesSegunServicio);

// El resto de las funciones permanecen igual
function mostrarModal(event) {
    event.preventDefault();
    const modal = document.getElementById("modal-spikedtech");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function cerrarModal() {
    const modal = document.getElementById("modal-spikedtech");
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

function enviarPorWhatsApp() {
    const nombre = document.getElementById("nombre-spikedtech").value;
    const apellido = document.getElementById("apellido-spikedtech").value;
    const servicio = document.getElementById("servicio-spikedtech").value;
    const descripcion = document.getElementById("descripcion-spikedtech").value;

    const mensaje = `Hola, soy ${nombre} ${apellido}. Estoy interesado en el servicio de ${servicio}. Descripción: ${descripcion}`;
    const whatsappURL = `https://wa.me/50663868608?text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappURL, "_blank");
    cerrarModal();
}

function enviarPorCorreo() {
    const nombre = document.getElementById("nombre-spikedtech").value;
    const apellido = document.getElementById("apellido-spikedtech").value;
    const correo = document.getElementById("correo-spikedtech").value;
    const telefono = document.getElementById("telefono-spikedtech").value;
    const servicio = document.getElementById("servicio-spikedtech").value;
    const descripcion = document.getElementById("descripcion-spikedtech").value;

    const mensaje = `
Formulario SPIKEDTECH - Datos del Usuario:
----------------------------------------
Nombre: ${nombre}
Apellido: ${apellido}
Correo Electrónico: ${correo}
Teléfono: ${telefono}
Servicio Seleccionado: ${servicio}
Descripción/Mensaje:
${descripcion}
----------------------------------------
    `;

    const mailtoLink = `mailto:jqchaves1928@gmail.com?subject=Formulario SPIKEDTECH | Datos del Usuario&body=${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
    cerrarModal();
}

// Event listeners para el modal
document.getElementById("modal-spikedtech").addEventListener("click", function(event) {
    if (event.target === this) {
        cerrarModal();
    }
});

document.querySelector(".modal-content").addEventListener("click", function(event) {
    event.stopPropagation();
});

function limpiarFormulario() {
    // Obtener el formulario
    const form = document.getElementById("form-spikedtech");
    
    // Limpiar todos los campos
    form.reset();
    
    // Habilitar el campo de descripción (en caso de que esté deshabilitado)
    const descripcion = document.getElementById("descripcion-spikedtech");
    descripcion.disabled = false;
    descripcion.value = "";
    
    // Restablecer los mensajes preescritos al estado inicial
    const servicioSelect = document.getElementById("servicio-spikedtech");
    servicioSelect.selectedIndex = 0;
    actualizarMensajesSegunServicio();
    
}