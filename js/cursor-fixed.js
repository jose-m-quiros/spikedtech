/**
 * SPIKEDTECH - Cursor Personalizado VERSIÓN FUNCIONAL
 * Garantizado visible y funcional
 */

(function () {
  "use strict";

  // Prevenir múltiples cargas
  if (window.spikedCursorActive) return;
  window.spikedCursorActive = true;

  class SpikedCursor {
    constructor() {
      this.cursor = null;
      this.dot = null;
      this.ring = null;
      this.mouseX = 0;
      this.mouseY = 0;
      this.cursorX = 0;
      this.cursorY = 0;
      this.isVisible = false;

      this.init();
    }

    init() {
      // Solo en desktop
      if (
        window.innerWidth <= 768 ||
        !window.matchMedia("(pointer: fine)").matches
      ) {
        return;
      }

      this.createCursor();
      this.addStyles();
      this.bindEvents();
      this.animate();

      // Mostrar cursor después de un breve delay
      setTimeout(() => this.show(), 100);
    }

    createCursor() {
      // Remover cursor existente
      const existing = document.querySelector("#spiked-cursor");
      if (existing) existing.remove();

      // Crear elementos
      this.cursor = document.createElement("div");
      this.cursor.id = "spiked-cursor";
      this.cursor.className = "spiked-cursor";

      this.dot = document.createElement("div");
      this.dot.className = "spiked-dot";

      this.ring = document.createElement("div");
      this.ring.className = "spiked-ring";

      this.cursor.appendChild(this.dot);
      this.cursor.appendChild(this.ring);
      document.body.appendChild(this.cursor);
    }

    addStyles() {
      const styleId = "spiked-cursor-styles";
      let styles = document.getElementById(styleId);

      if (styles) styles.remove();

      styles = document.createElement("style");
      styles.id = styleId;
      styles.innerHTML = `
        /* Ocultar cursor nativo */
        * { cursor: none !important; }
        
        /* Cursor personalizado */
        .spiked-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 9999999;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .spiked-cursor.visible {
          opacity: 1;
        }
        
        .spiked-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #00d4ff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 
            0 0 10px rgba(0, 212, 255, 0.8),
            0 0 20px rgba(0, 212, 255, 0.4);
          transition: all 0.15s ease;
        }
        
        .spiked-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 32px;
          height: 32px;
          border: 2px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }
        
        /* Estados del cursor */
        .spiked-cursor.hover .spiked-dot {
          width: 16px;
          height: 16px;
          background: #ffffff;
          box-shadow: 
            0 0 15px rgba(255, 255, 255, 0.9),
            0 0 30px rgba(0, 212, 255, 0.6);
        }
        
        .spiked-cursor.hover .spiked-ring {
          width: 48px;
          height: 48px;
          border-color: rgba(0, 212, 255, 0.8);
          border-width: 3px;
        }
        
        .spiked-cursor.click .spiked-dot {
          transform: translate(-50%, -50%) scale(1.5);
          background: #ff6b6b;
        }
        
        .spiked-cursor.click .spiked-ring {
          transform: translate(-50%, -50%) scale(1.2);
          border-color: rgba(255, 107, 107, 0.8);
        }
        
        /* Responsive - mostrar cursor nativo en móviles */
        @media (max-width: 768px) {
          * { cursor: auto !important; }
          .spiked-cursor { display: none !important; }
        }
        
        /* Animación de pulso */
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .spiked-cursor.hover .spiked-ring {
          animation: pulse 2s infinite ease-in-out;
        }
      `;

      document.head.appendChild(styles);
    }

    bindEvents() {
      // Seguimiento del mouse
      document.addEventListener("mousemove", (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        if (!this.isVisible) {
          this.show();
        }
      });

      // Elementos interactivos
      document.addEventListener("mouseover", (e) => {
        const target = e.target;

        if (
          target.matches(
            'a, button, .btn, [role="button"], input[type="button"], input[type="submit"]'
          )
        ) {
          this.setHover(true);
        } else {
          this.setHover(false);
        }
      });

      // Click
      document.addEventListener("mousedown", () => {
        this.setClick(true);
      });

      document.addEventListener("mouseup", () => {
        this.setClick(false);
      });

      // Salida del mouse
      document.addEventListener("mouseleave", () => {
        this.hide();
      });

      document.addEventListener("mouseenter", () => {
        this.show();
      });
    }

    animate() {
      const loop = () => {
        if (!this.cursor) return;

        // Interpolación suave
        const speed = 0.15;
        this.cursorX += (this.mouseX - this.cursorX) * speed;
        this.cursorY += (this.mouseY - this.cursorY) * speed;

        // Aplicar posición
        this.cursor.style.left = this.cursorX + "px";
        this.cursor.style.top = this.cursorY + "px";

        requestAnimationFrame(loop);
      };

      loop();
    }

    show() {
      if (!this.cursor) return;

      this.isVisible = true;
      this.cursor.classList.add("visible");
    }

    hide() {
      if (!this.cursor) return;

      this.isVisible = false;
      this.cursor.classList.remove("visible");
    }

    setHover(isHover) {
      if (!this.cursor) return;

      if (isHover) {
        this.cursor.classList.add("hover");
      } else {
        this.cursor.classList.remove("hover");
      }
    }

    setClick(isClick) {
      if (!this.cursor) return;

      if (isClick) {
        this.cursor.classList.add("click");
      } else {
        this.cursor.classList.remove("click");
      }
    }

    destroy() {
      if (this.cursor) {
        this.cursor.remove();
      }

      const styles = document.getElementById("spiked-cursor-styles");
      if (styles) {
        styles.remove();
      }

      // Restaurar cursor nativo
      document.documentElement.style.cursor = "auto";
    }
  }

  // Inicialización
  let cursorInstance = null;

  function initCursor() {
    // Solo en desktop
    if (
      window.innerWidth > 768 &&
      window.matchMedia("(pointer: fine)").matches
    ) {
      if (!cursorInstance) {
        cursorInstance = new SpikedCursor();
        window.spikedCursor = cursorInstance;
      }
    }
  }

  function destroyCursor() {
    if (cursorInstance) {
      cursorInstance.destroy();
      cursorInstance = null;
      window.spikedCursor = null;
    }
  }

  // Manejo de resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth <= 768) {
        destroyCursor();
      } else if (!cursorInstance) {
        initCursor();
      }
    }, 250);
  });

  // Inicializar cuando esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCursor);
  } else {
    initCursor();
  }

  // Funciones globales de control
  window.cursorControls = {
    show: () => cursorInstance?.show(),
    hide: () => cursorInstance?.hide(),
    recreate: () => {
      destroyCursor();
      initCursor();
    },
    destroy: destroyCursor,
  };
})();
