// Script para la pantalla de carga mejorada
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos la pantalla de carga
  const loadingScreen = document.querySelector('.loading-screen');
  
  // Agregar logo a la pantalla de carga
  const logoImg = document.createElement('img');
  logoImg.src = 'img/logoSpikedtechredondo.png';
  logoImg.alt = 'SPIKEDTECH';
  logoImg.className = 'loading-logo';
  
  // Agregar mensaje de carga con efecto de tipeo
  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'loading-message typing-effect';
  loadingMessage.textContent = 'Cargando SPIKEDTECH...';
  
  // Insertar logo antes de la animación existente
  const threeBody = loadingScreen.querySelector('.three-body');
  loadingScreen.insertBefore(logoImg, threeBody);
  
  // Insertar mensaje después de la animación
  loadingScreen.appendChild(loadingMessage);
  
  // Establecer un tiempo mínimo de visualización (en milisegundos)
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
  
  const progressText = document.createElement('div');
  progressText.className = 'loading-progress-text';
  progressText.textContent = '0%';
  
  progressContainer.appendChild(progressBar);
  progressContainer.appendChild(progressText);
  
  // Añadir el contenedor de progreso después del mensaje
  loadingScreen.appendChild(progressContainer);
  
  // Mensajes para mostrar durante la carga (mejorados para ser más atractivos)
  const loadingMessages = [
    "Preparando la experiencia SPIKEDTECH...",
    "Optimizando el rendimiento...",
    "Cargando recursos digitales...",
    "Casi listo para la experiencia completa..."
  ];

  // Cambiar el mensaje cada 2 segundos con transición suave
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
        simulatedProgress += 2 + Math.random() * 2; // Añade algo de aleatoriedad
      } else if (simulatedProgress < 90) {
        simulatedProgress += 0.8 + Math.random() * 0.8;
      } else if (simulatedProgress < 98) {
        simulatedProgress += 0.2 + Math.random() * 0.2;
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
        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        setTimeout(hideLoadingScreen, 500);
      }
    }, 150); // Actualiza el progreso cada 150ms
    
    return progressInterval;
  }

  // Inicia la simulación de progreso
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
        
        // Animación de entrada para las tarjetas después de que se quita la pantalla de carga
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100 * index);
        });
      }, 500);
    }, 1000);
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
  // Esto asegura que los usuarios no queden atrapados en la pantalla de carga
  setTimeout(hideLoadingScreen, 8000);
  
  // Añadir efecto de scroll al header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
  
  // Animación para elementos cuando entran en el viewport
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.secion-de-pedidos, .footer-container > div');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Aplicar estilos iniciales para la animación
  document.querySelectorAll('.secion-de-pedidos, .footer-container > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Activar animaciones al hacer scroll
  window.addEventListener('scroll', animateOnScroll);
  // Comprobar también al cargar la página
  setTimeout(animateOnScroll, 1000);
});