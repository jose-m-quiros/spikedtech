const currentPage = window.location.pathname.split("/").pop() || "index.html";

function markActiveLinks() {
  const links = document.querySelectorAll(".nav-link, .mobile-link");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const normalizedHref = href.split("#")[0] || "index.html";
    const isHome = currentPage === "" || currentPage === "/" || currentPage === "index.html";

    if (
      normalizedHref === currentPage ||
      (isHome && normalizedHref === "index.html")
    ) {
      link.classList.add("is-active");
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const links = document.querySelectorAll(".mobile-link");

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    toggle.classList.add("is-open");
    menu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      closeMenu();
    }
  });
}

function initRevealObserver() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (!revealElements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -30px 0px",
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 60, 320)}ms`;
    observer.observe(element);
  });
}

function buildProjectMessage(form) {
  const name = form.querySelector("#project-name")?.value.trim() || "";
  const email = form.querySelector("#project-email")?.value.trim() || "";
  const phone = form.querySelector("#project-phone")?.value.trim() || "";
  const service = form.querySelector("#project-service")?.value.trim() || "";
  const stage = form.querySelector("#project-stage")?.value.trim() || "";
  const budget = form.querySelector("#project-budget")?.value.trim() || "";
  const timeline = form.querySelector("#project-timeline")?.value.trim() || "";
  const brief = form.querySelector("#project-brief")?.value.trim() || "";

  return [
    "Hola SPIKEDTECH, quiero solicitar una propuesta.",
    `Nombre: ${name || "No indicado"}`,
    `Correo: ${email || "No indicado"}`,
    `Teléfono: ${phone || "No indicado"}`,
    `Servicio principal: ${service || "No indicado"}`,
    `Etapa del proyecto: ${stage || "No indicado"}`,
    `Presupuesto estimado: ${budget || "No indicado"}`,
    `Ventana de entrega: ${timeline || "No indicado"}`,
    `Resumen del proyecto: ${brief || "Sin descripción"}`,
  ].join("\n");
}

function initQuickIntents(form) {
  const chips = form.querySelectorAll(".intent-chip");
  const briefField = form.querySelector("#project-brief");

  if (!chips.length || !briefField) {
    return;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const message = chip.dataset.message || "";

      chips.forEach((item) => item.classList.remove("is-selected"));
      chip.classList.add("is-selected");

      briefField.value = message;
      briefField.focus();
    });
  });
}

function initContactForm() {
  const form = document.querySelector("#project-form");

  if (!form) {
    return;
  }

  initQuickIntents(form);

  const whatsappButton = form.querySelector("#send-whatsapp");
  const emailButton = form.querySelector("#send-email");
  const resetButton = form.querySelector("#reset-form");

  const clearIntentSelection = () => {
    form.querySelectorAll(".intent-chip").forEach((chip) => {
      chip.classList.remove("is-selected");
    });
  };

  const sendViaWhatsApp = () => {
    if (!form.reportValidity()) {
      return;
    }

    const message = buildProjectMessage(form);
    const url = `https://wa.me/50687394231?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  };

  const sendViaEmail = () => {
    if (!form.reportValidity()) {
      return;
    }

    const message = buildProjectMessage(form);
    const subject = "Solicitud de propuesta | SPIKEDTECH";
    window.location.href = `mailto:spikedtech19@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendViaWhatsApp();
  });

  whatsappButton?.addEventListener("click", sendViaWhatsApp);
  emailButton?.addEventListener("click", sendViaEmail);
  resetButton?.addEventListener("click", () => {
    form.reset();
    clearIntentSelection();
  });
}

function setCurrentYear() {
  const yearNodes = document.querySelectorAll("[data-year]");
  const year = String(new Date().getFullYear());

  yearNodes.forEach((node) => {
    node.textContent = year;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  markActiveLinks();
  initMobileMenu();
  initRevealObserver();
  initContactForm();
  setCurrentYear();
});
