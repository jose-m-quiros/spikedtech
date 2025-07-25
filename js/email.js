// ============================================
// SPIKEDTECH - JavaScript Completo
// Formulario y Acordeones de Políticas
// ============================================

// ============================================
// 1. FUNCIONES DEL FORMULARIO
// ============================================

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

function actualizarMensajesSegunServicio() {
  const servicioSelect = document.getElementById("servicio-spikedtech");
  const mensajesSelect = document.getElementById("mensajes-spikedtech");
  const descripcion = document.getElementById("descripcion-spikedtech");

  descripcion.value = "";
  descripcion.disabled = false;

  const opcionesNormales = [
    { value: "", text: "Seleccione un mensaje preescrito..." },
    {
      value: "Deseo que me contacten para obtener más información.",
      text: "Deseo que me contacten para obtener más información.",
    },
    {
      value: "Quiero recibir una cotización de sus servicios.",
      text: "Quiero recibir una cotización de sus servicios.",
    },
    {
      value: "Estoy interesado en sus productos disponibles.",
      text: "Estoy interesado en sus productos disponibles.",
    },
    {
      value: "Tengo dudas sobre el soporte técnico que ofrecen.",
      text: "Tengo dudas sobre el soporte técnico que ofrecen.",
    },
  ];

  const opcionesProductos = [
    { value: "", text: "Seleccione un mensaje preescrito..." },
    {
      value: "Deseo que me contacten para obtener más información.",
      text: "Deseo que me contacten para obtener más información.",
    },
    {
      value: "Quiero recibir una cotización de sus Productos.",
      text: "Quiero recibir una cotización de sus Productos.",
    },
    {
      value: "Estoy interesado en sus productos disponibles.",
      text: "Estoy interesado en sus productos disponibles.",
    },
  ];

  mensajesSelect.innerHTML = "";

  const opciones =
    servicioSelect.value === "Productos Disponibles"
      ? opcionesProductos
      : opcionesNormales;

  opciones.forEach((opcion) => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    mensajesSelect.appendChild(optionElement);
  });
}

function mostrarModal(event) {
  event.preventDefault();
  const modal = document.getElementById("modal-spikedtech");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

function cerrarModal() {
  const modal = document.getElementById("modal-spikedtech");
  modal.classList.remove("active");
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
  const whatsappURL = `https://wa.me/50663868608?text=${encodeURIComponent(
    mensaje
  )}`;

  window.open(whatsappURL, "_blank");
  cerrarModal();

  // ✅ AGREGADO: Limpiar formulario después del envío
  limpiarFormulario();
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

  const mailtoLink = `mailto:spikedtech19@gmail.com?subject=Formulario SPIKEDTECH | Datos del Usuario&body=${encodeURIComponent(
    mensaje
  )}`;

  window.location.href = mailtoLink;
  cerrarModal();

  // ✅ AGREGADO: Limpiar formulario después del envío
  limpiarFormulario();
}

function limpiarFormulario() {
  const form = document.getElementById("form-spikedtech");

  form.reset();

  const descripcion = document.getElementById("descripcion-spikedtech");
  descripcion.disabled = false;
  descripcion.value = "";

  const servicioSelect = document.getElementById("servicio-spikedtech");
  servicioSelect.selectedIndex = 0;
  actualizarMensajesSegunServicio();
}

// ============================================
// 2. FUNCIONES DE ACORDEONES (POLÍTICAS)
// ============================================

function initializeAccordions() {
  const policyHeaders = document.querySelectorAll(".policy-header");

  policyHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const targetId = this.getAttribute("data-toggle");
      const content = document.getElementById(targetId);
      const arrow = this.querySelector(".policy-arrow");

      // Cerrar todos los otros acordeones
      policyHeaders.forEach((otherHeader) => {
        if (otherHeader !== this) {
          const otherId = otherHeader.getAttribute("data-toggle");
          const otherContent = document.getElementById(otherId);
          const otherArrow = otherHeader.querySelector(".policy-arrow");

          if (otherContent) {
            otherContent.classList.remove("active");
          }
          if (otherArrow) {
            otherArrow.style.transform = "rotate(0deg)";
          }
        }
      });

      // Toggle del acordeón actual
      if (content) {
        const isActive = content.classList.contains("active");

        if (isActive) {
          content.classList.remove("active");
          if (arrow) {
            arrow.style.transform = "rotate(0deg)";
          }
        } else {
          content.classList.add("active");
          if (arrow) {
            arrow.style.transform = "rotate(180deg)";
          }
        }
      }
    });
  });
}

// ============================================
// 7. EVENT LISTENERS
// ============================================

// Event listeners para el formulario
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar todas las funcionalidades
  initializeAccordions();

  // Event listeners del formulario
  const servicioSelect = document.getElementById("servicio-spikedtech");
  if (servicioSelect) {
    servicioSelect.addEventListener("change", actualizarMensajesSegunServicio);
  }

  const mensajesSelect = document.getElementById("mensajes-spikedtech");
  if (mensajesSelect) {
    mensajesSelect.addEventListener("change", actualizarDescripcion);
  }

  // Modal event listeners
  const modal = document.getElementById("modal-spikedtech");
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === this) {
        cerrarModal();
      }
    });
  }

  const modalContent = document.querySelector(".modal-content");
  if (modalContent) {
    modalContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
});

// ============================================
// 8. FUNCIONES ADICIONALES DE ANIMACIÓN
// ============================================

// Intersection Observer para animaciones al scroll
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar elementos para animación
  const animatedElements = document.querySelectorAll(
    ".team-card, .payment-card, .policy-item"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Ejecutar animaciones de scroll después de que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(initializeScrollAnimations, 1000);
});

// ============================================
// 9. UTILITY FUNCTIONS
// ============================================

// Función para validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para validar teléfono (Costa Rica)
function isValidPhone(phone) {
  const phoneRegex = /^[0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ""));
}

// Función para mostrar notificaciones (opcional)
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    color: var(--text-primary);
    backdrop-filter: var(--glass-backdrop);
    z-index: var(--z-toast);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}
