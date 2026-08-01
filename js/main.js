const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("#contact-form");
const yearTarget = document.querySelector("#year");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const sectionId = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${sectionId}`;
        link.classList.toggle("active", isCurrent);
      });
    });
  },
  {
    rootMargin: "-45% 0px -40% 0px",
    threshold: 0,
  },
);

sections.forEach((section) => sectionObserver.observe(section));

if (contactForm) {
  const fields = {
    name: contactForm.querySelector("#name"),
    email: contactForm.querySelector("#email"),
    message: contactForm.querySelector("#message"),
  };

  const statusEl = contactForm.querySelector(".form-status");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const setError = (field, message) => {
    const errorEl = contactForm.querySelector(`[data-error-for=\"${field}\"]`);
    if (errorEl) {
      errorEl.textContent = message;
    }
  };

  const clearErrors = () => {
    contactForm.querySelectorAll(".field-error").forEach((el) => {
      el.textContent = "";
    });
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    if (statusEl) {
      statusEl.textContent = "";
    }

    let hasError = false;

    if (!fields.name.value.trim()) {
      hasError = true;
      setError("name", "Ingresa tu nombre completo.");
    }

    if (!emailRegex.test(fields.email.value.trim())) {
      hasError = true;
      setError("email", "Ingresa un correo electronico valido.");
    }

    if (fields.message.value.trim().length < 12) {
      hasError = true;
      setError("message", "Describe tu proyecto con al menos 12 caracteres.");
    }

    if (hasError) {
      if (statusEl) {
        statusEl.textContent = "Revisa los campos marcados para continuar.";
      }
      return;
    }

    if (statusEl) {
      statusEl.textContent =
        "Solicitud enviada. Te responderemos en menos de 24 horas habiles.";
    }

    contactForm.reset();
  });
}
