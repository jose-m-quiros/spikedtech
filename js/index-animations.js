/**
 * SPIKEDTECH - Cursor Personalizado Ultra Visible
 * Versión mejorada que garantiza visibilidad total del cursor
 */

class UltraVisibleCursor {
  constructor() {
    this.cursor = null;
    this.dot = null;
    this.ring = null;
    this.isActive = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.isMoving = false;
    this.moveTimeout = null;
  }

  init() {
    this.createStyles();
    this.createElement();
    this.setupEvents();
    this.startAnimation();

    // Activar cursor inmediatamente y garantizar visibilidad
    setTimeout(() => {
      this.activate();
      this.ensureVisibility();
    }, 100);

    // Verificación de visibilidad cada 2 segundos
    setInterval(() => {
      this.checkVisibility();
    }, 2000);
  }

  createStyles() {
    const styleId = "ultra-visible-cursor-styles";

    // Remover estilos existentes
    const existingStyles = document.getElementById(styleId);
    if (existingStyles) {
      existingStyles.remove();
    }

    const css = `
      /* === ULTRA VISIBLE CURSOR - GARANTÍA TOTAL === */
      .ultra-cursor {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 32px !important;
        height: 32px !important;
        pointer-events: none !important;
        z-index: 2147483647 !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transition: opacity 0.2s ease !important;
        will-change: transform !important;
        transform: translate3d(-50%, -50%, 0) !important;
        mix-blend-mode: difference !important;
      }
      
      .ultra-cursor.active {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
      }
      
      .ultra-cursor.moving {
        opacity: 1 !important;
      }
      
      .ultra-cursor-dot {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        width: 10px !important;
        height: 10px !important;
        background: #00d4ff !important;
        border-radius: 50% !important;
        transform: translate(-50%, -50%) !important;
        transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        box-shadow: 
          0 0 10px rgba(0, 212, 255, 1) !important,
          0 0 20px rgba(0, 212, 255, 0.8) !important,
          0 0 30px rgba(0, 212, 255, 0.6) !important;
        border: 2px solid rgba(255, 255, 255, 0.9) !important;
      }
      
      .ultra-cursor-ring {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        width: 32px !important;
        height: 32px !important;
        border: 2px solid rgba(0, 212, 255, 0.8) !important;
        border-radius: 50% !important;
        transform: translate(-50%, -50%) !important;
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        opacity: 0.9 !important;
        background: rgba(0, 212, 255, 0.1) !important;
      }
      
      /* === ESTADO HOVER - MÁS VISIBLE === */
      .ultra-cursor.hover .ultra-cursor-dot {
        width: 16px !important;
        height: 16px !important;
        background: #ffffff !important;
        box-shadow: 
          0 0 20px rgba(255, 255, 255, 1) !important,
          0 0 40px rgba(0, 212, 255, 1) !important,
          0 0 60px rgba(0, 212, 255, 0.8) !important;
        border: 3px solid rgba(0, 212, 255, 1) !important;
      }
      
      .ultra-cursor.hover .ultra-cursor-ring {
        width: 60px !important;
        height: 60px !important;
        border-color: rgba(0, 212, 255, 1) !important;
        border-width: 3px !important;
        opacity: 1 !important;
        background: rgba(0, 212, 255, 0.15) !important;
      }
      
      /* === ESTADO BOTÓN === */
      .ultra-cursor.button .ultra-cursor-dot {
        background: #6366f1 !important;
        box-shadow: 
          0 0 15px rgba(99, 102, 241, 1) !important,
          0 0 30px rgba(99, 102, 241, 0.8) !important;
        border: 2px solid rgba(255, 255, 255, 1) !important;
      }
      
      .ultra-cursor.button .ultra-cursor-ring {
        border-color: rgba(99, 102, 241, 1) !important;
        background: rgba(99, 102, 241, 0.1) !important;
      }
      
      /* === ESTADO ENLACE === */
      .ultra-cursor.link .ultra-cursor-dot {
        background: #f59e0b !important;
        box-shadow: 
          0 0 15px rgba(245, 158, 11, 1) !important,
          0 0 30px rgba(245, 158, 11, 0.8) !important;
        border: 2px solid rgba(255, 255, 255, 1) !important;
      }
      
      .ultra-cursor.link .ultra-cursor-ring {
        border-color: rgba(245, 158, 11, 1) !important;
        background: rgba(245, 158, 11, 0.1) !important;
      }
      
      /* === ESTADO TEXTO === */
      .ultra-cursor.text .ultra-cursor-dot {
        width: 4px !important;
        height: 32px !important;
        border-radius: 3px !important;
        background: #00d4ff !important;
        box-shadow: 
          0 0 10px rgba(0, 212, 255, 1) !important,
          0 0 20px rgba(0, 212, 255, 0.8) !important;
        border: 1px solid rgba(255, 255, 255, 1) !important;
      }
      
      .ultra-cursor.text .ultra-cursor-ring {
        opacity: 0.3 !important;
        transform: translate(-50%, -50%) scale(0.5) !important;
      }
      
      /* === OCULTAR CURSOR NATIVO SELECTIVAMENTE === */
      .ultra-cursor-active {
        cursor: none !important;
      }
      
      .ultra-cursor-active * {
        cursor: none !important;
      }
      
      .ultra-cursor-active input:not([type="submit"]):not([type="button"]),
      .ultra-cursor-active textarea,
      .ultra-cursor-active select {
        cursor: text !important;
      }
      
      /* === ANIMACIONES MEJORADAS === */
      @keyframes ultraPulse {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.9;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
        }
      }
      
      .ultra-cursor.hover .ultra-cursor-ring {
        animation: ultraPulse 1.5s infinite ease-in-out;
      }
      
      @keyframes ultraGlow {
        0%, 100% {
          box-shadow: 
            0 0 10px rgba(0, 212, 255, 1),
            0 0 20px rgba(0, 212, 255, 0.8),
            0 0 30px rgba(0, 212, 255, 0.6);
        }
        50% {
          box-shadow: 
            0 0 20px rgba(0, 212, 255, 1),
            0 0 40px rgba(0, 212, 255, 1),
            0 0 60px rgba(0, 212, 255, 0.8);
        }
      }
      
      .ultra-cursor-dot {
        animation: ultraGlow 2s infinite ease-in-out;
      }
      
      /* === MODO OSCURO === */
      @media (prefers-color-scheme: dark) {
        .ultra-cursor-dot {
          background: #00d4ff !important;
          border: 2px solid rgba(0, 0, 0, 0.8) !important;
        }
        
        .ultra-cursor.hover .ultra-cursor-dot {
          background: #ffffff !important;
          border: 3px solid rgba(0, 0, 0, 0.9) !important;
        }
      }
      
      /* === MODO CLARO === */
      @media (prefers-color-scheme: light) {
        .ultra-cursor {
          mix-blend-mode: multiply !important;
        }
        
        .ultra-cursor-dot {
          background: #0066cc !important;
          border: 2px solid rgba(255, 255, 255, 1) !important;
        }
        
        .ultra-cursor.hover .ultra-cursor-dot {
          background: #000000 !important;
          border: 3px solid rgba(255, 255, 255, 1) !important;
        }
      }
      
      /* === RESPONSIVE === */
      @media (max-width: 768px) {
        .ultra-cursor {
          display: none !important;
        }
        
        .ultra-cursor-active,
        .ultra-cursor-active * {
          cursor: auto !important;
        }
      }
      
      /* === REDUCIR MOVIMIENTO === */
      @media (prefers-reduced-motion: reduce) {
        .ultra-cursor-dot,
        .ultra-cursor-ring {
          transition: none !important;
          animation: none !important;
        }
      }
      
      /* === ALTO CONTRASTE === */
      @media (prefers-contrast: high) {
        .ultra-cursor {
          mix-blend-mode: normal !important;
        }
        
        .ultra-cursor-dot {
          background: #000000 !important;
          box-shadow: 
            0 0 0 3px #ffffff !important,
            0 0 0 6px #000000 !important;
          border: none !important;
        }
        
        .ultra-cursor-ring {
          border-color: rgba(0, 0, 0, 1) !important;
          border-width: 4px !important;
          background: rgba(255, 255, 255, 0.9) !important;
        }
      }
      
      /* === FUERZA EXTREMA PARA VISIBILIDAD === */
      .ultra-cursor.force-visible {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        pointer-events: none !important;
        z-index: 2147483647 !important;
      }
      
      .ultra-cursor.force-visible .ultra-cursor-dot {
        background: #ff0066 !important;
        opacity: 1 !important;
        display: block !important;
        box-shadow: 
          0 0 20px rgba(255, 0, 102, 1) !important,
          0 0 40px rgba(255, 0, 102, 0.8) !important;
      }
      
      .ultra-cursor.force-visible .ultra-cursor-ring {
        border-color: rgba(255, 0, 102, 1) !important;
        opacity: 1 !important;
        display: block !important;
      }
    `;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  }

  createElement() {
    // Crear contenedor principal
    this.cursor = document.createElement("div");
    this.cursor.className = "ultra-cursor";
    this.cursor.id = "ultra-cursor-main";

    // Crear punto central
    this.dot = document.createElement("div");
    this.dot.className = "ultra-cursor-dot";

    // Crear anillo
    this.ring = document.createElement("div");
    this.ring.className = "ultra-cursor-ring";

    // Ensamblar
    this.cursor.appendChild(this.dot);
    this.cursor.appendChild(this.ring);

    // Agregar al DOM con máxima prioridad
    document.body.appendChild(this.cursor);

    // Forzar repaint y reflow
    this.cursor.offsetHeight;
    this.cursor.getBoundingClientRect();
  }

  ensureVisibility() {
    if (!this.cursor) return;

    // Múltiples capas de garantía de visibilidad
    this.cursor.style.cssText += `
      opacity: 1 !important;
      visibility: visible !important;
      display: block !important;
      pointer-events: none !important;
      z-index: 2147483647 !important;
    `;

    this.cursor.classList.add("force-visible");

    // Verificar y corregir después de un momento
    setTimeout(() => {
      if (this.cursor) {
        const computedStyle = getComputedStyle(this.cursor);
        const isVisible =
          computedStyle.opacity !== "0" &&
          computedStyle.visibility !== "hidden";

        if (!isVisible) {
          this.applyEmergencyVisibility();
        }
      }
    }, 200);
  }

  applyEmergencyVisibility() {
    if (!this.cursor) return;

    // Cambiar a colores de emergencia ultra visibles
    this.dot.style.cssText = `
      background: #ff0066 !important;
      box-shadow: 
        0 0 30px rgba(255, 0, 102, 1) !important,
        0 0 60px rgba(255, 0, 102, 0.8) !important !important;
      border: 3px solid #ffffff !important;
      opacity: 1 !important;
      visibility: visible !important;
      display: block !important;
    `;

    this.ring.style.cssText = `
      border-color: rgba(255, 0, 102, 1) !important;
      border-width: 4px !important;
      background: rgba(255, 0, 102, 0.2) !important;
      opacity: 1 !important;
      visibility: visible !important;
      display: block !important;
    `;

    // Desactivar mix-blend-mode si causa problemas
    this.cursor.style.mixBlendMode = "normal";
  }

  checkVisibility() {
    if (!this.cursor || !this.isActive) return;

    const rect = this.cursor.getBoundingClientRect();
    const computedStyle = getComputedStyle(this.cursor);

    const isActuallyVisible =
      computedStyle.opacity !== "0" &&
      computedStyle.visibility !== "hidden" &&
      computedStyle.display !== "none";

    if (!isActuallyVisible) {
      this.ensureVisibility();
    }
  }

  setupEvents() {
    // Seguimiento del mouse mejorado
    document.addEventListener(
      "mousemove",
      (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        if (!this.isActive) {
          this.activate();
        }

        // Marcar como en movimiento
        this.isMoving = true;
        this.cursor?.classList.add("moving");

        // Limpiar timeout anterior
        if (this.moveTimeout) {
          clearTimeout(this.moveTimeout);
        }

        // Marcar como detenido después de un tiempo
        this.moveTimeout = setTimeout(() => {
          this.isMoving = false;
          this.cursor?.classList.remove("moving");
        }, 100);
      },
      { passive: true }
    );

    // Eventos de entrada y salida mejorados
    document.addEventListener("mouseenter", () => {
      this.activate();
    });

    document.addEventListener("mouseleave", () => {
      this.deactivate();
    });

    // Configurar elementos interactivos
    this.setupInteractiveElements();

    // Evento de visibilidad de página
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && this.cursor) {
        setTimeout(() => this.ensureVisibility(), 100);
      }
    });
  }

  setupInteractiveElements() {
    // Seleccionar elementos de manera más amplia
    const interactiveSelectors = [
      "a",
      "button",
      'input[type="submit"]',
      'input[type="button"]',
      '[role="button"]',
      '[tabindex="0"]',
      ".clickable",
      ".btn-primary",
      ".btn-secondary",
      ".btn-nav-cta",
      ".btn-mobile-cta",
      ".nav-link",
      ".mobile-nav-link",
      ".social-link",
      ".feature-card",
      ".service-item",
      ".value-item",
      ".mobile-menu-btn",
      ".mobile-menu-close",
    ];

    const elements = document.querySelectorAll(interactiveSelectors.join(", "));

    elements.forEach((element) => {
      // Determinar tipo de elemento
      let cursorType = "hover";

      if (
        element.tagName === "BUTTON" ||
        element.classList.contains("btn-primary") ||
        element.classList.contains("btn-secondary")
      ) {
        cursorType = "button";
      } else if (
        element.tagName === "A" &&
        !element.classList.contains("btn-primary") &&
        !element.classList.contains("btn-secondary")
      ) {
        cursorType = "link";
      }

      element.addEventListener("mouseenter", () => {
        this.setCursorType(cursorType);
      });

      element.addEventListener("mouseleave", () => {
        this.resetCursor();
      });
    });

    // Elementos de texto
    const textElements = document.querySelectorAll(`
      p, h1, h2, h3, h4, h5, h6, span:not(.icon), 
      input[type="text"], input[type="email"], textarea
    `);

    textElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (
          !element.closest("a") &&
          !element.closest("button") &&
          !element.closest(".clickable")
        ) {
          this.setCursorType("text");
        }
      });

      element.addEventListener("mouseleave", () => {
        this.resetCursor();
      });
    });
  }

  setCursorType(type) {
    if (!this.cursor) return;

    // Limpiar clases anteriores
    this.cursor.classList.remove("hover", "button", "link", "text");

    // Agregar nueva clase
    this.cursor.classList.add(type);

    // Asegurar visibilidad en cambios de estado
    this.ensureVisibility();
  }

  resetCursor() {
    if (!this.cursor) return;

    this.cursor.classList.remove("hover", "button", "link", "text");
  }

  activate() {
    if (this.isActive || !this.cursor) return;

    this.isActive = true;
    this.cursor.classList.add("active");
    document.body.classList.add("ultra-cursor-active");

    // Garantizar visibilidad cada vez que se activa
    this.ensureVisibility();
  }

  deactivate() {
    if (!this.isActive || !this.cursor) return;

    this.isActive = false;
    this.cursor.classList.remove("active");
    // NO remover la clase del body para mantener cursor: none
  }

  startAnimation() {
    const animate = () => {
      if (!this.cursor) return;

      // Interpolación más agresiva para mejor seguimiento
      const ease = 0.2;
      const diffX = this.mouseX - this.currentX;
      const diffY = this.mouseY - this.currentY;

      this.currentX += diffX * ease;
      this.currentY += diffY * ease;

      // Aplicar transformación
      const transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;
      this.cursor.style.transform = transform;

      requestAnimationFrame(animate);
    };

    animate();
  }

  destroy() {
    if (this.moveTimeout) {
      clearTimeout(this.moveTimeout);
    }

    if (this.cursor) {
      this.cursor.remove();
    }

    document.body.classList.remove("ultra-cursor-active");

    const styles = document.getElementById("ultra-visible-cursor-styles");
    if (styles) {
      styles.remove();
    }
  }
}

// Función de inicialización mejorada
function initUltraVisibleCursor() {
  // Verificar compatibilidad
  if (window.innerWidth <= 768) {
    return;
  }

  if (!window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  // Destruir cursor existente si existe
  if (window.ultraCursor) {
    window.ultraCursor.destroy();
  }

  // Crear nuevo cursor
  window.ultraCursor = new UltraVisibleCursor();

  // Verificaciones de emergencia
  setTimeout(() => {
    if (window.ultraCursor && window.ultraCursor.cursor) {
      const cursor = window.ultraCursor.cursor;
      const isVisible = getComputedStyle(cursor).opacity !== "0";

      if (!isVisible) {
        window.ultraCursor.ensureVisibility();
      }
    }
  }, 1000);

  // Verificación adicional después de 3 segundos
  setTimeout(() => {
    if (window.ultraCursor) {
      window.ultraCursor.checkVisibility();
    }
  }, 3000);
}

// Inicialización cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initUltraVisibleCursor);
} else {
  initUltraVisibleCursor();
}

// Manejo de cambios de tamaño con debounce
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.innerWidth <= 768 && window.ultraCursor) {
      window.ultraCursor.destroy();
      window.ultraCursor = null;
    } else if (window.innerWidth > 768 && !window.ultraCursor) {
      initUltraVisibleCursor();
    }
  }, 250);
});

// Funciones de emergencia disponibles globalmente
window.cursorEmergency = {
  forceShow: () => {
    if (window.ultraCursor) {
      window.ultraCursor.ensureVisibility();
    }
  },
  recreate: () => {
    if (window.ultraCursor) {
      window.ultraCursor.destroy();
    }
    initUltraVisibleCursor();
  },
  status: () => {
    if (window.ultraCursor && window.ultraCursor.cursor) {
      const cursor = window.ultraCursor.cursor;
      const style = getComputedStyle(cursor);
      return {
        opacity: style.opacity,
        visibility: style.visibility,
        display: style.display,
        zIndex: style.zIndex,
        isActive: window.ultraCursor.isActive,
      };
    } else {
      return null;
    }
  },
};

// Detectar conflictos con otros cursors
const existingCursors = document.querySelectorAll(
  '[class*="cursor"], [id*="cursor"]'
);
if (existingCursors.length > 0) {
  existingCursors.forEach((el, index) => {
    if (el.id !== "ultra-cursor-main") {
      el.style.display = "none";
    }
  });
}
