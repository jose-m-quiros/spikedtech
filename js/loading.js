/**
 * SPIKEDTECH - Ultra Fast Loading System (0.5s) - COMPATIBLE VERSION
 * Funciona con la estructura HTML existente
 */

class ModernLoader {
  constructor() {
    // SELECCIONADORES CORREGIDOS PARA TU HTML
    this.loadingScreen = document.querySelector(".loading-screen");
    this.progressBar = document.querySelector(".loading-progress-bar");
    this.progressText = document.querySelector(".loading-progress-text");
    this.loadingMessage = document.querySelector(".loading-message");
    this.loadingLogo = document.querySelector(".loading-logo");

    // CONFIGURACIÓN ULTRA-RÁPIDA - 0.4 SEGUNDOS
    this.config = {
      minLoadingTime: 400, // 0.4 segundos mínimo
      maxLoadingTime: 600, // 0.6 segundos máximo
      messageInterval: 200, // Cambio de mensajes cada 0.2s
      progressSpeed: 12, // Más rápido (12ms = ~83fps)
      fadeOutDuration: 150, // Fade out súper rápido
      forceComplete: 300, // Forzar completado a los 300ms
    };

    // State management
    this.state = {
      startTime: performance.now(),
      progress: 0,
      isComplete: false,
      resourcesLoaded: false,
      currentMessageIndex: 0,
      progressInterval: null,
      messageInterval: null,
    };

    // MENSAJES OPTIMIZADOS
    this.messages = [
      "Cargando experiencia...",
      "Preparando contenido...",
      "¡Casi listo!",
    ];

    // RECURSOS CRÍTICOS MÍNIMOS
    this.criticalResources = ["img/logoSpikedtechredondo.png"];

    this.init();
  }

  /**
   * Initialize the loading system
   */
  init() {
    if (!this.loadingScreen) {
      return;
    }

    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Asegurar que la pantalla de carga sea visible
    this.loadingScreen.style.display = "flex";
    this.loadingScreen.style.opacity = "1";

    // INICIAR TODOS LOS PROCESOS INMEDIATAMENTE
    this.simulateProgress();
    this.rotateMessages();
    this.preloadResources();
    this.setupForceComplete();
    this.setupSafetyTimeout();
  }

  /**
   * PROGRESO ULTRA-AGRESIVO - Completa en 300-400ms
   */
  simulateProgress() {
    let progressValue = 0;

    this.state.progressInterval = setInterval(() => {
      if (this.state.isComplete) {
        clearInterval(this.state.progressInterval);
        return;
      }

      // INCREMENTOS MASIVOS para completar rápido
      const increment = this.calculateUltraFastIncrement(progressValue);
      progressValue = Math.min(progressValue + increment, 98);

      this.state.progress = progressValue;
      this.updateProgressBar(progressValue);

      // COMPLETAR A LOS 250ms O 75% de progreso
      const elapsed = performance.now() - this.state.startTime;
      if (elapsed >= 250 || progressValue >= 75) {
        this.complete();
      }
    }, this.config.progressSpeed);
  }

  /**
   * INCREMENTOS ULTRA-MASIVOS PARA 0.4s
   */
  calculateUltraFastIncrement(currentProgress) {
    if (currentProgress < 25) {
      return 20 + Math.random() * 25; // 20-45% por frame
    } else if (currentProgress < 50) {
      return 15 + Math.random() * 20; // 15-35% por frame
    } else if (currentProgress < 70) {
      return 10 + Math.random() * 15; // 10-25% por frame
    } else if (currentProgress < 85) {
      return 5 + Math.random() * 10; // 5-15% por frame
    } else {
      return 2 + Math.random() * 5; // 2-7% por frame
    }
  }

  /**
   * Update progress bar with immediate effect
   */
  updateProgressBar(percent) {
    if (this.progressBar) {
      this.progressBar.style.width = `${percent}%`;
    }
    if (this.progressText) {
      this.progressText.textContent = `${Math.round(percent)}%`;
    }
  }

  /**
   * ROTACIÓN RÁPIDA DE MENSAJES
   */
  rotateMessages() {
    if (!this.loadingMessage) return;

    let messageIndex = 0;

    this.state.messageInterval = setInterval(() => {
      if (this.state.isComplete) {
        clearInterval(this.state.messageInterval);
        return;
      }

      messageIndex = (messageIndex + 1) % this.messages.length;
      this.updateMessage(this.messages[messageIndex]);
    }, this.config.messageInterval);
  }

  /**
   * ACTUALIZACIÓN INMEDIATA DE MENSAJES
   */
  updateMessage(newMessage) {
    if (!this.loadingMessage) return;

    // Cambio inmediato sin animación para máxima velocidad
    this.loadingMessage.textContent = newMessage;
  }

  /**
   * CARGA MÍNIMA Y RÁPIDA DE RECURSOS
   */
  async preloadResources() {
    try {
      // Marcar como cargado inmediatamente si no hay recursos críticos
      if (this.criticalResources.length === 0) {
        this.state.resourcesLoaded = true;
        return;
      }

      // Timeout ultra-agresivo para recursos (100ms)
      const resourcePromise = Promise.allSettled(
        this.criticalResources.map((src) => this.preloadImageFast(src))
      );

      // Timeout de 100ms máximo para recursos
      const timeoutPromise = new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), 100)
      );

      await Promise.race([resourcePromise, timeoutPromise]);

      this.state.resourcesLoaded = true;
    } catch (error) {
      this.state.resourcesLoaded = true; // No bloquear
    }
  }

  /**
   * Preload image with aggressive timeout
   */
  preloadImageFast(src) {
    return new Promise((resolve) => {
      const img = new Image();

      // Timeout súper-agresivo
      const timeout = setTimeout(() => {
        resolve({ src, success: false, reason: "timeout" });
      }, 80); // Solo 80ms por imagen

      img.onload = () => {
        clearTimeout(timeout);
        resolve({ src, success: true });
      };

      img.onerror = () => {
        clearTimeout(timeout);
        resolve({ src, success: false, reason: "error" });
      };

      img.src = src;
    });
  }

  /**
   * FORZAR COMPLETADO A LOS 300ms SIN IMPORTAR NADA
   */
  setupForceComplete() {
    setTimeout(() => {
      if (!this.state.isComplete) {
        this.state.resourcesLoaded = true;
        this.complete();
      }
    }, this.config.forceComplete);
  }

  /**
   * TIMEOUT DE EMERGENCIA
   */
  setupSafetyTimeout() {
    setTimeout(() => {
      if (!this.state.isComplete) {
        this.forceComplete();
      }
    }, this.config.maxLoadingTime);
  }

  /**
   * Complete the loading process
   */
  complete() {
    if (this.state.isComplete) return;

    this.state.isComplete = true;

    // Limpiar intervalos
    if (this.state.progressInterval) {
      clearInterval(this.state.progressInterval);
    }
    if (this.state.messageInterval) {
      clearInterval(this.state.messageInterval);
    }

    const elapsedTime = performance.now() - this.state.startTime;
    const remainingTime = Math.max(0, this.config.minLoadingTime - elapsedTime);

    // Completar progreso inmediatamente
    this.updateProgressBar(100);

    setTimeout(() => {
      this.finishLoading();
    }, remainingTime);
  }

  /**
   * FINALIZACIÓN INMEDIATA
   */
  finishLoading() {
    // Mensaje final
    if (this.loadingMessage) {
      this.loadingMessage.textContent = "¡Bienvenido a SPIKEDTECH!";
    }

    // Fade out súper inmediato
    setTimeout(() => {
      this.fadeOutLoadingScreen();
    }, 30); // Casi inmediato (30ms)
  }

  /**
   * FADE OUT ULTRA-RÁPIDO
   */
  fadeOutLoadingScreen() {
    if (!this.loadingScreen) return;

    // Aplicar fade out
    this.loadingScreen.style.transition = `opacity ${this.config.fadeOutDuration}ms ease-out`;
    this.loadingScreen.style.opacity = "0";

    setTimeout(() => {
      this.loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.classList.add("content-loaded");

      // Evento de completado
      this.dispatchLoadingComplete();
    }, this.config.fadeOutDuration);
  }

  /**
   * FORZAR COMPLETADO DE EMERGENCIA
   */
  forceComplete() {
    this.state.isComplete = true;
    this.state.resourcesLoaded = true;

    // Limpiar todos los intervalos
    if (this.state.progressInterval) clearInterval(this.state.progressInterval);
    if (this.state.messageInterval) clearInterval(this.state.messageInterval);

    // Completar inmediatamente
    this.updateProgressBar(100);
    this.fadeOutLoadingScreen();
  }

  /**
   * Dispatch loading complete event
   */
  dispatchLoadingComplete() {
    const event = new CustomEvent("loadingComplete", {
      detail: {
        loadTime: performance.now() - this.state.startTime,
        resourcesLoaded: this.state.resourcesLoaded,
        forced: false,
      },
    });

    document.dispatchEvent(event);
  }
}

/**
 * INICIALIZACIÓN INMEDIATA
 */
function initializeUltraFastLoader() {
  // Crear loader inmediatamente
  const loader = new ModernLoader();

  // Backup por si algo falla (reducido a 800ms)
  setTimeout(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen && loadingScreen.style.display !== "none") {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }, 800); // Backup a 0.8 segundos
}

// INICIALIZAR CUANDO EL DOM ESTÉ LISTO
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeUltraFastLoader);
} else {
  // DOM ya está listo
  initializeUltraFastLoader();
}

// TAMBIÉN INICIALIZAR INMEDIATAMENTE POR SI ACASO
setTimeout(initializeUltraFastLoader, 0);

/**
 * PREVENIR PROBLEMAS DE NAVEGACIÓN
 */
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.classList.add("content-loaded");
    }
  }
});

// Export para uso en módulos
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ModernLoader };
}
