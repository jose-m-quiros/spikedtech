const currentPage = window.location.pathname.split("/").pop() || "index.html";
const WHATSAPP_PHONE = "50687394231";
const WHATSAPP_WEB_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

function isProbablyMobileDevice() {
  return (
    window.matchMedia?.("(pointer: coarse)")?.matches ||
    /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent)
  );
}

function buildWhatsAppUrls(message = "") {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  const webUrl = encodedMessage
    ? `${WHATSAPP_WEB_BASE_URL}?text=${encodedMessage}`
    : WHATSAPP_WEB_BASE_URL;
  const appUrl = encodedMessage
    ? `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`
    : `whatsapp://send?phone=${WHATSAPP_PHONE}`;

  return { appUrl, webUrl };
}

function openWhatsApp(message = "") {
  const { appUrl, webUrl } = buildWhatsAppUrls(message);
  const destinationUrl = isProbablyMobileDevice() ? appUrl : webUrl;

  window.location.assign(destinationUrl);
}

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

  const revealImmediatelyIfVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= viewportHeight - 48 && rect.bottom >= 0) {
      element.classList.add("is-visible");
      return true;
    }

    return false;
  };

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

    if (revealImmediatelyIfVisible(element)) {
      return;
    }

    observer.observe(element);
  });

  window.addEventListener(
    "load",
    () => {
      revealElements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          revealImmediatelyIfVisible(element);
        }
      });
    },
    { once: true }
  );
}

function buildProjectMessage(form) {
  const name = form.querySelector("#project-name")?.value.trim() || "";
  const email = form.querySelector("#project-email")?.value.trim() || "";
  const phone = form.querySelector("#project-phone")?.value.trim() || "";
  const service = form.querySelector("#project-service")?.value.trim() || "";
  const stage = form.querySelector("#project-stage")?.value.trim() || "";
  const budget = form.querySelector("#project-budget")?.value.trim() || "";
  const timeline = form.querySelector("#project-timeline")?.value.trim() || "";
  const summary = form.querySelector("#project-summary")?.value.trim() || "";

  return [
    "Hola SPIKEDTECH, quiero solicitar una propuesta.",
    `Nombre: ${name || "No indicado"}`,
    `Correo: ${email || "No indicado"}`,
    `Teléfono: ${phone || "No indicado"}`,
    `Servicio principal: ${service || "No indicado"}`,
    `Etapa del proyecto: ${stage || "No indicado"}`,
    `Presupuesto estimado: ${budget || "No indicado"}`,
    `Ventana de entrega: ${timeline || "No indicado"}`,
    `Resumen del proyecto: ${summary || "Sin descripción"}`,
  ].join("\n");
}

function initQuickIntents(form) {
  const chips = form.querySelectorAll(".intent-chip");
  const summaryField = form.querySelector("#project-summary");

  if (!chips.length || !summaryField) {
    return;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const message = chip.dataset.message || "";

      chips.forEach((item) => item.classList.remove("is-selected"));
      chip.classList.add("is-selected");

      summaryField.value = message;
      summaryField.focus();
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
    openWhatsApp(message);
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

function initFaqAccordions() {
  const faqGroups = document.querySelectorAll(".faq-grid");

  if (!faqGroups.length) {
    return;
  }

  faqGroups.forEach((group) => {
    const items = Array.from(group.querySelectorAll("details"));

    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) {
          return;
        }

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      });
    });
  });
}

function initEqualPanelHeights() {
  const groups = document.querySelectorAll(".split-layout-equal");

  if (!groups.length) {
    return;
  }

  const syncGroupHeights = (group) => {
    const panels = Array.from(group.querySelectorAll(":scope > .panel"));

    if (panels.length < 2) {
      return;
    }

    panels.forEach((panel) => {
      panel.style.minHeight = "";
    });

    const maxHeight = Math.max(...panels.map((panel) => panel.offsetHeight));

    panels.forEach((panel) => {
      panel.style.minHeight = `${maxHeight}px`;
    });
  };

  const syncAllGroups = () => {
    groups.forEach(syncGroupHeights);
  };

  syncAllGroups();
  window.addEventListener("resize", syncAllGroups);
  window.addEventListener("load", syncAllGroups, { once: true });

  if (document.fonts?.ready) {
    document.fonts.ready.then(syncAllGroups);
  }
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
  initFaqAccordions();
  initEqualPanelHeights();
  setCurrentYear();
});
