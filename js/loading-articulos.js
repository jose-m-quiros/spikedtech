// Script para la página de artículos disponibles
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos la pantalla de carga
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Agregar logo a la pantalla de carga
    const logoImg = document.createElement('img');
    logoImg.src = 'img/logoSpikedtechredondo.png';
    logoImg.alt = 'SPIKEDTECH';
    logoImg.className = 'loading-logo';
    
    // Añadir animación de carga
    const threeBody = document.createElement('div');
    threeBody.className = 'three-body';
    threeBody.innerHTML = `
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
    `;
    
    // Agregar mensaje de carga con efecto de tipeo
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading-message typing-effect';
    loadingMessage.textContent = 'Cargando SPIKEDTECH...';
    
    // Insertar elementos en la pantalla de carga
    loadingScreen.appendChild(logoImg);
    loadingScreen.appendChild(threeBody);
    loadingScreen.appendChild(loadingMessage);
    
    // Establece un tiempo mínimo de visualización (en milisegundos)
    const minLoadingTime = 3000; // 3 segundos mínimo
    let loadingStartTime = Date.now();
    
    // Contador de recursos cargados y total de recursos a cargar
    let resourcesLoaded = 0;
    
    // Obtener todos los recursos que necesitamos cargar
    const images = Array.from(document.images);
    const totalResources = images.length;
    
    // Añadir información de progreso a la pantalla de carga
    const progressContainer = document.createElement('div');
    progressContainer.className = 'loading-progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'loading-progress-bar';
    progressBar.style.width = '0%'; // Asegurarse de que empiece en 0%
    
    const progressText = document.createElement('div');
    progressText.className = 'loading-progress-text';
    progressText.textContent = '0%';
    
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);
    
    // Añadir el contenedor de progreso después del mensaje
    loadingScreen.appendChild(progressContainer);
    
    // Mensajes para mostrar durante la carga
    const loadingMessages = [
      "Cargando productos...",
      "Preparando catálogo...",
      "Optimizando imágenes...",
      "Casi listo..."
    ];
  
    // Cambiar el mensaje cada 2 segundos
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      loadingMessage.style.opacity = '0';
      setTimeout(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        loadingMessage.textContent = loadingMessages[messageIndex];
        loadingMessage.style.opacity = '1';
      }, 300);
    }, 2000);
    
    // Simulación de progreso incremental para una experiencia más suave
    function simulateProgress() {
      let simulatedProgress = 0;
      const progressInterval = setInterval(() => {
        // Aumenta el progreso simulado gradualmente, más lento cerca del final
        if (simulatedProgress < 70) {
          simulatedProgress += 1 + Math.random() * 1.5; // Más aleatorio para parecer real
        } else if (simulatedProgress < 90) {
          simulatedProgress += 0.5 + Math.random() * 0.5;
        } else if (simulatedProgress < 98) {
          simulatedProgress += 0.1 + Math.random() * 0.2;
        }
        
        // Limita el progreso a 99% hasta que todos los recursos estén cargados
        simulatedProgress = Math.min(simulatedProgress, 99);
        
        // Actualiza la barra de progreso
        progressBar.style.width = `${simulatedProgress}%`;
        progressText.textContent = `${Math.round(simulatedProgress)}%`;
        
        // Si llegamos al 100% o todos los recursos están cargados, detenemos la simulación
        if (simulatedProgress >= 99 && resourcesLoaded >= totalResources) {
          clearInterval(progressInterval);
          
          // Completamos el progreso visualmente
          setTimeout(() => {
            progressBar.style.width = '100%';
            progressText.textContent = '100%';
            setTimeout(hideLoadingScreen, 500);
          }, 200);
        }
      }, 100); // Actualiza el progreso cada 100ms
      
      return progressInterval;
    }
  
    // Inicia la simulación de progreso con un pequeño retraso para asegurar que se vea la animación
    setTimeout(() => {
      const progressSimulation = simulateProgress();
      
      // Función para actualizar el progreso real
      function updateProgress() {
        resourcesLoaded++;
        
        // Si todos los recursos están cargados y la simulación llegó al 99%
        if (resourcesLoaded >= totalResources && parseFloat(progressBar.style.width || '0') >= 99) {
          progressBar.style.width = '100%';
          progressText.textContent = '100%';
          clearInterval(progressSimulation); // Detiene la simulación
          setTimeout(hideLoadingScreen, 500);
        }
      }
      
      // Verificar si hay imágenes para cargar
      if (totalResources > 0) {
        // Escuchar eventos de carga para cada imagen
        images.forEach(img => {
          // Si la imagen ya está cargada
          if (img.complete) {
            updateProgress();
          } else {
            // Si la imagen aún no está cargada, añadir un listener
            img.addEventListener('load', updateProgress);
            img.addEventListener('error', updateProgress); // Contar incluso si hay error
          }
        });
      } else {
        // Si no hay imágenes, igualmente mostramos la pantalla de carga por el tiempo mínimo
        setTimeout(hideLoadingScreen, minLoadingTime);
      }
      
      // Establecemos un tiempo máximo para la pantalla de carga (8 segundos)
      setTimeout(hideLoadingScreen, 8000);
    }, 500); // Retraso inicial para asegurar que se vea la animación desde 0%
    
    // Función para ocultar la pantalla de carga con una transición suave
    function hideLoadingScreen() {
      // Calcula cuánto tiempo ha pasado desde que comenzó la carga
      const elapsedTime = Date.now() - loadingStartTime;
      
      // Si no ha pasado el tiempo mínimo, espera hasta que se cumpla
      if (elapsedTime < minLoadingTime) {
        setTimeout(() => {
          hideLoadingScreenActual();
        }, minLoadingTime - elapsedTime);
      } else {
        // Si ya ha pasado el tiempo mínimo, oculta inmediatamente
        hideLoadingScreenActual();
      }
    }
  
    // La función real que oculta la pantalla de carga
    function hideLoadingScreenActual() {
      // Limpia el intervalo de mensajes
      clearInterval(messageInterval);
      // Muestra un mensaje final
      loadingMessage.classList.remove('typing-effect');
      loadingMessage.textContent = "¡Bienvenido a SPIKEDTECH!";
      loadingMessage.style.fontWeight = '600';
      loadingMessage.style.color = 'var(--primary-color)';
      
      // Aplicamos una animación final al logo
      logoImg.style.animation = 'pulse 0.8s ease-in-out';
      
      // Efecto de brillo en la barra de progreso
      progressBar.style.boxShadow = '0 0 15px rgba(64, 248, 255, 0.7)';
      
      // Espera un momento para mostrar el mensaje final
      setTimeout(() => {
        // Fade out de la pantalla de carga
        loadingScreen.classList.add('hidden');
        
        // Establecemos un tiempo de espera para asegurarnos de que la transición termine
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          document.body.classList.add('content-loaded');
          
          // Iniciar animaciones de las tarjetas
          animateCards();
        }, 500);
      }, 1000);
    }
    
    // Función para animar las tarjetas una vez que la página esté cargada
    function animateCards() {
      const columns = document.querySelectorAll('.col-lg-4');
      columns.forEach((column, index) => {
        setTimeout(() => {
          column.style.opacity = '1';
          column.style.transform = 'translateY(0)';
        }, 100 * index);
      });
    }
    
    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
    
    // Mejorar interacción con carruseles
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      // Pausar carrusel al hacer hover
      carousel.addEventListener('mouseenter', function() {
        this.querySelector('.carousel-control-prev').style.opacity = '0.7';
        this.querySelector('.carousel-control-next').style.opacity = '0.7';
      });
      
      carousel.addEventListener('mouseleave', function() {
        this.querySelector('.carousel-control-prev').style.opacity = '0';
        this.querySelector('.carousel-control-next').style.opacity = '0';
      });
    });
    
    // Mejorar la experiencia de navegación móvil
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.links');
    
    if (hamburgerBtn && closeBtn && navLinks) {
      hamburgerBtn.addEventListener('click', function() {
        navLinks.classList.add('show-menu');
      });
      
      closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('show-menu');
      });
      
      // Cerrar menú al hacer clic en un enlace
      const menuLinks = navLinks.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          navLinks.classList.remove('show-menu');
        });
      });
    }
    
    // Botón para volver atrás
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        window.history.back();
      });
      
      // Control de visibilidad del botón según el scroll
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          backBtn.style.opacity = '0.7';
        } else {
          backBtn.style.opacity = '1';
        }
      });
      
      // Adaptar posición en dispositivos móviles
      function adjustButtonPosition() {
        if (window.innerWidth <= 768) {
          backBtn.style.top = 'auto';
          backBtn.style.bottom = '20px';
          backBtn.style.left = '20px';
          backBtn.style.transform = 'none';
        } else {
          backBtn.style.top = '50%';
          backBtn.style.bottom = 'auto';
          backBtn.style.left = '20px';
          backBtn.style.transform = 'translateY(-50%)';
        }
      }
      
      // Ajustar posición al cargar y al cambiar tamaño de ventana
      adjustButtonPosition();
      window.addEventListener('resize', adjustButtonPosition);
    }
    
    // Igualar alturas de tarjetas para un diseño más uniforme
    function equalizeCardHeights() {
      // Primero, agrupamos las tarjetas por filas según el diseño responsive
      const viewportWidth = window.innerWidth;
      let cardsPerRow = 3; // Por defecto en pantallas grandes
      
      if (viewportWidth < 992 && viewportWidth >= 768) {
        cardsPerRow = 2; // Pantallas medianas
      } else if (viewportWidth < 768) {
        cardsPerRow = 1; // Pantallas pequeñas
      }
      
      const allCards = document.querySelectorAll('.card');
      const rows = [];
      
      // Agrupar tarjetas en filas
      for (let i = 0; i < allCards.length; i += cardsPerRow) {
        rows.push(Array.from(allCards).slice(i, i + cardsPerRow));
      }
      
      // Igualar altura para cada fila
      rows.forEach(row => {
        // Restablecer alturas
        row.forEach(card => {
          card.style.height = 'auto';
        });
        
        // Encontrar altura máxima
        let maxHeight = 0;
        row.forEach(card => {
          const height = card.offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
        
        // Aplicar altura máxima
        row.forEach(card => {
          card.style.height = maxHeight + 'px';
        });
      });
    }
    
    // Ejecutar después de que se carguen las imágenes y al cambiar tamaño de ventana
    window.addEventListener('load', equalizeCardHeights);
    window.addEventListener('resize', equalizeCardHeights);
    
    // Efecto especial para los botones "Comprar ahora"
    const buyButtons = document.querySelectorAll('.btn-primary');
    buyButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 20px rgba(39, 159, 255, 0.3)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
  });