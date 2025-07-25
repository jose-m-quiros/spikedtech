/**
 * SPIKEDTECH - Modern Navbar JavaScript
 * Advanced navigation functionality with mobile support
 *
 * Features:
 * - Responsive mobile menu
 * - Smooth scroll effects
 * - Active link detection
 * - Scroll-based header changes
 * - Touch-friendly interactions
 * - Accessibility support
 */

class ModernNavbar {
  constructor() {
    this.header = document.querySelector(".modern-header");
    this.mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    this.mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
    this.mobileMenuClose = document.querySelector(".mobile-menu-close");
    this.mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    this.navLinks = document.querySelectorAll(".nav-link");

    this.isMenuOpen = false;
    this.lastScrollY = 0;
    this.scrollThreshold = 100;
    this.isScrolling = false;

    this.init();
  }

  init() {
    if (!this.header) return;

    this.setupEventListeners();
    this.setupScrollEffect();
    this.setupActiveNavigation();
    this.setupSmoothScrolling();
    this.setupKeyboardNavigation();
    this.updateActiveLink();
  }

  /**
   * Setup all event listeners
   */
  setupEventListeners() {
    // Mobile menu toggle
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMobileMenu();
      });
    }

    // Mobile menu close
    if (this.mobileMenuClose) {
      this.mobileMenuClose.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeMobileMenu();
      });
    }

    // Close menu when clicking overlay
    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.addEventListener("click", (e) => {
        if (e.target === this.mobileMenuOverlay) {
          this.closeMobileMenu();
        }
      });
    }

    // Close menu when clicking mobile nav links
    this.mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.closeMobileMenu();
      });
    });

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMenuOpen) {
        this.closeMobileMenu();
      }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      this.handleResize();
    });

    // Prevent body scroll when menu is open
    this.mobileMenuOverlay?.addEventListener(
      "touchmove",
      (e) => {
        if (this.isMenuOpen) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  }

  /**
   * Toggle mobile menu
   */
  toggleMobileMenu() {
    if (this.isMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  /**
   * Open mobile menu
   */
  openMobileMenu() {
    this.isMenuOpen = true;
    this.mobileMenuBtn?.classList.add("active");
    this.mobileMenuOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";

    // Focus management
    const firstFocusableElement =
      this.mobileMenuOverlay?.querySelector("button, a");
    firstFocusableElement?.focus();

    // Animate menu items
    this.animateMenuItems();
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu() {
    this.isMenuOpen = false;
    this.mobileMenuBtn?.classList.remove("active");
    this.mobileMenuOverlay?.classList.remove("active");
    document.body.style.overflow = "";

    // Return focus to menu button
    this.mobileMenuBtn?.focus();
  }

  /**
   * Animate menu items when opening
   */
  animateMenuItems() {
    const menuItems =
      this.mobileMenuOverlay?.querySelectorAll(".mobile-nav-link");

    menuItems?.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(20px)";

      setTimeout(() => {
        item.style.transition = "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, 100 + index * 50);
    });
  }

  /**
   * Handle window resize
   */
  handleResize() {
    // Close mobile menu on desktop
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMobileMenu();
    }

    // Reset menu item styles
    const menuItems =
      this.mobileMenuOverlay?.querySelectorAll(".mobile-nav-link");
    menuItems?.forEach((item) => {
      item.style.transition = "";
      item.style.opacity = "";
      item.style.transform = "";
    });
  }

  /**
   * Setup scroll effect for header
   */
  setupScrollEffect() {
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.pageYOffset;

      // Add/remove scrolled class
      if (currentScrollY > this.scrollThreshold) {
        this.header?.classList.add("scrolled");
      } else {
        this.header?.classList.remove("scrolled");
      }

      this.lastScrollY = currentScrollY;
      ticking = false;
    };

    const requestHeaderUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
  }

  /**
   * Setup active navigation highlighting
   */
  setupActiveNavigation() {
    const sections = document.querySelectorAll("section[id], main[id]");

    if (sections.length === 0) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-20% 0px -20% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * Set active navigation link
   */
  setActiveLink(sectionId) {
    // Remove active class from all links
    this.navLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to current link
    const activeLink = document.querySelector(
      `.nav-link[href="#${sectionId}"], .nav-link[href*="${sectionId}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // Handle home/index page
    if (
      sectionId === "hero" ||
      window.location.pathname === "/" ||
      window.location.pathname.includes("index")
    ) {
      const homeLink = document.querySelector(
        '.nav-link[href="index.html"], .nav-link[href="/"], .nav-link[href="#"]'
      );
      if (homeLink) {
        homeLink.classList.add("active");
      }
    }
  }

  /**
   * Update active link based on current page
   */
  updateActiveLink() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    this.navLinks.forEach((link) => {
      link.classList.remove("active");

      const linkHref = link.getAttribute("href");

      // Check for exact path match
      if (
        linkHref === currentPath ||
        (currentPath.includes("index") && linkHref === "index.html") ||
        (currentPath === "/" && linkHref === "index.html")
      ) {
        link.classList.add("active");
      }

      // Check for hash match
      if (currentHash && linkHref === currentHash) {
        link.classList.add("active");
      }
    });
  }

  /**
   * Setup smooth scrolling for anchor links
   */
  setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        if (targetId === "#" || targetId === "") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          const headerHeight = this.header?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Update URL without triggering scroll
          history.pushState(null, null, targetId);

          // Close mobile menu if open
          if (this.isMenuOpen) {
            this.closeMobileMenu();
          }
        }
      });
    });
  }

  /**
   * Setup keyboard navigation
   */
  setupKeyboardNavigation() {
    // Tab trapping in mobile menu
    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.addEventListener("keydown", (e) => {
        if (!this.isMenuOpen) return;

        if (e.key === "Tab") {
          const focusableElements = this.mobileMenuOverlay.querySelectorAll(
            'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      });
    }

    // Arrow key navigation for desktop menu
    this.navLinks.forEach((link, index) => {
      link.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          const nextLink = this.navLinks[index + 1] || this.navLinks[0];
          nextLink.focus();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          const prevLink =
            this.navLinks[index - 1] || this.navLinks[this.navLinks.length - 1];
          prevLink.focus();
        }
      });
    });
  }

  /**
   * Add visual feedback for interactions
   */
  addHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll(".btn-nav-cta, .btn-mobile-cta");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;

        button.style.position = "relative";
        button.style.overflow = "hidden";
        button.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add ripple animation
    const rippleKeyframes = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;

    const style = document.createElement("style");
    style.textContent = rippleKeyframes;
    document.head.appendChild(style);
  }

  /**
   * Handle touch gestures for mobile
   */
  setupTouchGestures() {
    let startX = 0;
    let startY = 0;

    this.mobileMenuOverlay?.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      },
      { passive: true }
    );

    this.mobileMenuOverlay?.addEventListener(
      "touchend",
      (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;

        // Swipe right to close menu
        if (Math.abs(diffX) > Math.abs(diffY) && diffX < -50) {
          this.closeMobileMenu();
        }
      },
      { passive: true }
    );
  }
}

/**
 * Navbar utilities and enhancements
 */
class NavbarUtils {
  static addLoadingStates() {
    // Add loading states to navigation links
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Only add loading for page navigation
        if (
          href &&
          !href.startsWith("#") &&
          href !== window.location.pathname
        ) {
          link.style.opacity = "0.6";
          link.style.pointerEvents = "none";

          // Create loading indicator
          const loader = document.createElement("span");
          loader.style.cssText = `
            display: inline-block;
            width: 12px;
            height: 12px;
            border: 2px solid transparent;
            border-top: 2px solid currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 8px;
          `;

          link.appendChild(loader);
        }
      });
    });

    // Add spin animation
    const spinKeyframes = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;

    const style = document.createElement("style");
    style.textContent = spinKeyframes;
    document.head.appendChild(style);
  }

  static addScrollProgress() {
    // Add scroll progress indicator
    const progressBar = document.createElement("div");
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      z-index: 10000;
      transition: width 0.1s ease;
    `;

    document.body.appendChild(progressBar);

    window.addEventListener(
      "scroll",
      () => {
        const scrollProgress =
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100;
        progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;
      },
      { passive: true }
    );
  }

  static addBreadcrumbs() {
    // Add breadcrumb navigation
    const breadcrumbContainer = document.createElement("nav");
    breadcrumbContainer.setAttribute("aria-label", "Breadcrumb");
    breadcrumbContainer.style.cssText = `
      position: fixed;
      top: 100px;
      left: 20px;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      z-index: 999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    const updateBreadcrumbs = () => {
      const path = window.location.pathname;
      const pathSegments = path.split("/").filter((segment) => segment);

      if (pathSegments.length > 0) {
        breadcrumbContainer.innerHTML = `
          <a href="/" style="color: var(--text-secondary); text-decoration: none;">Inicio</a>
          ${pathSegments
            .map(
              (segment) => `
            <span style="color: var(--text-muted); margin: 0 8px;">/</span>
            <span style="color: var(--text-primary);">${
              segment.charAt(0).toUpperCase() + segment.slice(1)
            }</span>
          `
            )
            .join("")}
        `;
        breadcrumbContainer.style.opacity = "1";
      } else {
        breadcrumbContainer.style.opacity = "0";
      }
    };

    document.body.appendChild(breadcrumbContainer);
    updateBreadcrumbs();

    // Update on navigation
    window.addEventListener("popstate", updateBreadcrumbs);
  }
}

/**
 * Initialize navbar when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize main navbar
  const navbar = new ModernNavbar();

  // Add enhancements
  navbar.addHoverEffects();
  navbar.setupTouchGestures();

  // Add utilities
  NavbarUtils.addLoadingStates();
  NavbarUtils.addScrollProgress();

  // Add breadcrumbs for non-home pages
  if (
    !window.location.pathname.includes("index") &&
    window.location.pathname !== "/"
  ) {
    NavbarUtils.addBreadcrumbs();
  }
});

/**
 * Handle page navigation
 */
window.addEventListener("beforeunload", () => {
  // Close mobile menu before navigation
  const navbar = document.querySelector(".modern-header");
  if (navbar) {
    document.body.style.overflow = "";
    const overlay = document.querySelector(".mobile-menu-overlay");
    if (overlay) {
      overlay.classList.remove("active");
    }
  }
});

/**
 * Export for module usage
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    ModernNavbar,
    NavbarUtils,
  };
}
