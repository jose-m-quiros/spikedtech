/**
 * SPIKEDTECH - Modern Loading System
 * Optimized for Performance & User Experience
 *
 * Features:
 * - Intelligent progress simulation
 * - Resource loading detection
 * - Smooth animations
 * - Performance monitoring
 * - Mobile optimization
 */

class ModernLoader {
  constructor() {
    this.loadingScreen = document.querySelector(".loading-screen");
    this.progressBar = document.querySelector(".loading-progress-bar");
    this.progressText = document.querySelector(".loading-progress-text");
    this.loadingMessage = document.querySelector(".loading-message");

    // Configuration
    this.config = {
      minLoadingTime: 1200, // Minimum loading time in ms (reduced from 2000)
      maxLoadingTime: 3000, // Maximum loading time in ms (reduced from 5000)
      messageInterval: 1200, // Message rotation interval (reduced from 1800)
      progressSpeed: 80, // Progress update interval (faster updates)
      fadeOutDuration: 400, // Fade out duration (faster fade)
    };

    // State management
    this.state = {
      startTime: performance.now(),
      progress: 0,
      isComplete: false,
      resourcesLoaded: false,
      currentMessageIndex: 0,
    };

    // Loading messages with typing effect (reduced to 3 messages)
    this.messages = [
      "Cargando experiencia...",
      "Preparando contenido...",
      "¡Casi listo!",
    ];

    // Critical resources to preload
    this.criticalResources = [
      "img/logoSpikedtechredondo.png",
      "img/wallpaper.jpg",
    ];

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

    // Start all loading processes
    this.simulateProgress();
    this.rotateMessages();
    this.preloadResources();
    this.setupSafetyTimeout();

    // Performance tracking
    this.trackPerformance();
  }

  /**
   * Simulate smooth progress with realistic behavior
   */
  simulateProgress() {
    const progressInterval = setInterval(() => {
      if (this.state.isComplete) {
        clearInterval(progressInterval);
        return;
      }

      // Calculate increment based on current progress
      let increment = this.calculateProgressIncrement();

      // Update progress
      this.state.progress = Math.min(this.state.progress + increment, 95);
      this.updateProgressBar(this.state.progress);

      // Check if we can complete (lowered threshold from 95 to 85)
      if (this.state.progress >= 85 && this.state.resourcesLoaded) {
        this.complete();
      }
    }, this.config.progressSpeed);
  }

  /**
   * Calculate progress increment based on current progress
   */
  calculateProgressIncrement() {
    const { progress } = this.state;

    if (progress < 30) {
      return 3 + Math.random() * 4; // Much faster initial progress (increased from 2-5)
    } else if (progress < 60) {
      return 2.5 + Math.random() * 3; // Faster moderate progress (increased from 1.5-3.5)
    } else if (progress < 80) {
      return 1.5 + Math.random() * 2; // Faster progress (increased from 1-2.5)
    } else if (progress < 90) {
      return 0.8 + Math.random() * 1.2; // Faster near completion (increased from 0.5-1.5)
    } else {
      return 0.3 + Math.random() * 0.7; // Faster final stretch (increased from 0.1-0.4)
    }
  }

  /**
   * Update progress bar with smooth animation
   */
  updateProgressBar(percent) {
    if (!this.progressBar || !this.progressText) return;

    requestAnimationFrame(() => {
      this.progressBar.style.width = `${percent}%`;
      this.progressText.textContent = `${Math.round(percent)}%`;
    });
  }

  /**
   * Rotate loading messages with smooth transitions
   */
  rotateMessages() {
    if (!this.loadingMessage) return;

    const messageInterval = setInterval(() => {
      if (this.state.isComplete) {
        clearInterval(messageInterval);
        return;
      }

      this.state.currentMessageIndex =
        (this.state.currentMessageIndex + 1) % this.messages.length;
      this.updateMessage(this.messages[this.state.currentMessageIndex]);
    }, this.config.messageInterval);
  }

  /**
   * Update loading message with fade effect
   */
  updateMessage(newMessage) {
    if (!this.loadingMessage) return;

    // Fade out current message
    this.loadingMessage.style.opacity = "0";
    this.loadingMessage.style.transform = "translateY(-10px)";

    setTimeout(() => {
      if (!this.state.isComplete) {
        this.loadingMessage.textContent = newMessage;
        this.loadingMessage.style.opacity = "1";
        this.loadingMessage.style.transform = "translateY(0)";
      }
    }, 300);
  }

  /**
   * Preload critical resources
   */
  async preloadResources() {
    try {
      // Wait for DOM to be ready
      await this.waitForDOM();

      // Preload critical images
      const imagePromises = this.criticalResources.map((src) =>
        this.preloadImage(src)
      );

      // Preload fonts
      const fontPromise = this.preloadFonts();

      // Wait for all resources
      await Promise.allSettled([...imagePromises, fontPromise]);

      this.state.resourcesLoaded = true;

      // Complete if progress is already high (lowered threshold)
      if (this.state.progress >= 85) {
        this.complete();
      }
    } catch (error) {
      this.state.resourcesLoaded = true; // Don't block loading
    }
  }

  /**
   * Preload a single image
   */
  preloadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ src, success: true });
      img.onerror = () => resolve({ src, success: false });
      img.src = src;
    });
  }

  /**
   * Preload fonts
   */
  preloadFonts() {
    return new Promise((resolve) => {
      if ("fonts" in document) {
        document.fonts.ready.then(resolve);
      } else {
        // Fallback for older browsers
        setTimeout(resolve, 1000);
      }
    });
  }

  /**
   * Wait for DOM to be ready
   */
  waitForDOM() {
    return new Promise((resolve) => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", resolve, { once: true });
      } else {
        resolve();
      }
    });
  }

  /**
   * Setup safety timeout to prevent infinite loading
   */
  setupSafetyTimeout() {
    setTimeout(() => {
      if (!this.state.isComplete) {
        this.complete();
      }
    }, this.config.maxLoadingTime);
  }

  /**
   * Complete the loading process
   */
  complete() {
    if (this.state.isComplete) return;

    this.state.isComplete = true;
    const elapsedTime = performance.now() - this.state.startTime;

    // Ensure minimum loading time for smooth UX
    const remainingTime = Math.max(0, this.config.minLoadingTime - elapsedTime);

    setTimeout(() => {
      this.finishLoading();
    }, remainingTime);
  }

  /**
   * Finish loading with final animations
   */
  finishLoading() {
    // Complete progress bar
    this.updateProgressBar(100);

    // Show completion message
    this.showCompletionMessage();

    // Start fade out sequence (reduced delay)
    setTimeout(() => {
      this.fadeOutLoadingScreen();
    }, 500);
  }

  /**
   * Show completion message
   */
  showCompletionMessage() {
    if (!this.loadingMessage) return;

    this.loadingMessage.style.transition = "all 0.5s ease";
    this.loadingMessage.textContent = "¡Bienvenido a SPIKEDTECH!";
    this.loadingMessage.style.fontWeight = "600";
    this.loadingMessage.style.color = "var(--primary)";
    this.loadingMessage.style.transform = "scale(1.05)";
  }

  /**
   * Fade out loading screen
   */
  fadeOutLoadingScreen() {
    if (!this.loadingScreen) return;

    this.loadingScreen.classList.add("fade-out");

    setTimeout(() => {
      this.loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.classList.add("content-loaded");

      // Trigger content animations
      this.animateContent();

      // Dispatch custom event
      this.dispatchLoadingComplete();
    }, this.config.fadeOutDuration);
  }

  /**
   * Animate content after loading
   */
  animateContent() {
    // Animate hero content
    const heroContent = document.querySelector(".hero-text");
    if (heroContent) {
      this.animateElement(heroContent, { delay: 0 });
    }

    // Animate feature cards with stagger
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card, index) => {
      this.animateElement(card, { delay: 200 + index * 150 });
    });

    // Animate service items
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item, index) => {
      this.animateElement(item, { delay: 400 + index * 100 });
    });
  }

  /**
   * Animate individual element
   */
  animateElement(element, options = {}) {
    const { delay = 0 } = options;

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";

    setTimeout(() => {
      element.style.transition =
        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, delay);
  }

  /**
   * Dispatch loading complete event
   */
  dispatchLoadingComplete() {
    const event = new CustomEvent("loadingComplete", {
      detail: {
        loadTime: performance.now() - this.state.startTime,
        resourcesLoaded: this.state.resourcesLoaded,
      },
    });

    document.dispatchEvent(event);
  }

  /**
   * Track loading performance
   */
  trackPerformance() {
    window.addEventListener("load", () => {
      if ("performance" in window) {
        const navigation = performance.getEntriesByType("navigation")[0];
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      }
    });
  }

  /**
   * Check if running in development
   */
  isDevelopment() {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === ""
    );
  }
}

/**
 * Header Controller - Handles header scroll effects
 */
class HeaderController {
  constructor() {
    this.header = document.querySelector(".modern-header");
    this.lastScrollY = window.scrollY;
    this.isScrolling = false;

    if (this.header) {
      this.init();
    }
  }

  init() {
    // Use passive listeners for better performance
    window.addEventListener("scroll", this.handleScroll.bind(this), {
      passive: true,
    });

    // Handle resize events
    window.addEventListener("resize", this.handleResize.bind(this), {
      passive: true,
    });
  }

  handleScroll() {
    if (!this.isScrolling) {
      requestAnimationFrame(() => {
        this.updateHeader();
        this.isScrolling = false;
      });
      this.isScrolling = true;
    }
  }

  updateHeader() {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100;

    if (currentScrollY > scrollThreshold) {
      this.header.classList.add("scrolled");
    } else {
      this.header.classList.remove("scrolled");
    }

    this.lastScrollY = currentScrollY;
  }

  handleResize() {
    // Recalculate header dimensions if needed
    this.updateHeader();
  }
}

/**
 * Intersection Observer Controller - Handles scroll-triggered animations
 */
class IntersectionController {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    this.init();
  }

  init() {
    if ("IntersectionObserver" in window) {
      this.setupObserver();
    } else {
      // Fallback for older browsers
      this.fallbackAnimation();
    }
  }

  setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, this.observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(`
      .service-item:not(.animated),
      .value-item:not(.animated),
      .about-text:not(.animated),
      .mission-card:not(.animated),
      .footer-section:not(.animated)
    `);

    animateElements.forEach((el) => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });
  }

  animateElement(element) {
    element.classList.add("animate-in", "animated");
  }

  fallbackAnimation() {
    // Simple fallback for browsers without IntersectionObserver
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.classList.add("animate-in", "animated");
    });
  }
}

/**
 * Performance Monitor - Tracks and optimizes performance
 */
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Monitor Core Web Vitals
    this.monitorLCP();
    this.monitorFID();
    this.monitorCLS();

    // Monitor loading performance
    window.addEventListener("load", () => {
      this.collectMetrics();
    });
  }

  monitorLCP() {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        // Silently fail for unsupported browsers
      }
    }
  }

  monitorFID() {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
        });
      });

      try {
        observer.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        // Silently fail for unsupported browsers
      }
    }
  }

  monitorCLS() {
    if ("PerformanceObserver" in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
          }
        });
      });

      try {
        observer.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        // Silently fail for unsupported browsers
      }
    }
  }

  collectMetrics() {
    if ("performance" in window) {
      const navigation = performance.getEntriesByType("navigation")[0];

      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.domContentLoaded =
        navigation.domContentLoadedEventEnd - navigation.fetchStart;
      this.metrics.resourceCount =
        performance.getEntriesByType("resource").length;

      // Get First Paint if available
      const paintEntries = performance.getEntriesByType("paint");
      const firstPaint = paintEntries.find(
        (entry) => entry.name === "first-paint"
      );
      if (firstPaint) {
        this.metrics.firstPaint = firstPaint.startTime;
      }
    }
  }

  isDevelopment() {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === ""
    );
  }
}

/**
 * Initialize all systems when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize loading system
  new ModernLoader();

  // Initialize header controller
  new HeaderController();

  // Initialize intersection observer
  new IntersectionController();

  // Initialize performance monitoring
  new PerformanceMonitor();
});

/**
 * Handle page visibility changes for better performance
 */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Page is hidden, pause animations if needed
    document.body.classList.add("page-hidden");
  } else {
    // Page is visible, resume animations
    document.body.classList.remove("page-hidden");
  }
});

/**
 * Prevent loading screen from showing on back/forward navigation
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

/**
 * Add CSS for scroll-triggered animations
 */
const animationStyles = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Reduce animations when page is hidden */
  .page-hidden * {
    animation-play-state: paused !important;
  }
`;

// Inject animation styles
const styleSheet = document.createElement("style");
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Export for module usage if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    ModernLoader,
    HeaderController,
    IntersectionController,
    PerformanceMonitor,
  };
}
