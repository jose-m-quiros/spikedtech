// Script de carga optimizado para el formulario y contenido
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos la pantalla de carga
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Agregar logo a la pantalla de carga si no existe
    if (!loadingScreen.querySelector('.loading-logo')) {
      const logoImg = document.createElement('img');
      logoImg.src = 'img/logoSpikedtechredondo.png';
      logoImg.alt = 'SPIKEDTECH';
      logoImg.className = 'loading-logo';
      
      // Insertar logo antes de la animación existente
      const threeBody = loadingScreen.querySelector('.three-body');
      if (threeBody) {
        loadingScreen.insertBefore(logoImg, threeBody);
      } else {
        loadingScreen.appendChild(logoImg);
      }
    }
    
    // Agregar mensaje de carga si no existe
    if (!loadingScreen.querySelector('.loading-message')) {
      const loadingMessage = document.createElement('div');
      loadingMessage.className = 'loading-message typing-effect';
      loadingMessage.textContent = 'Cargando SPIKEDTECH...';
      loadingScreen.appendChild(loadingMessage);
    }
    
    // Agregar barra de progreso si no existe
    if (!loadingScreen.querySelector('.loading-progress-container')) {
      const progressContainer = document.createElement('div');
      progressContainer.className = 'loading-progress-container';
      
      const progressBar = document.createElement('div');
      progressBar.className = 'loading-progress-bar';
      
      const progressText = document.createElement('div');
      progressText.className = 'loading-progress-text';
      progressText.textContent = '0%';
      
      progressContainer.appendChild(progressBar);
      progressContainer.appendChild(progressText);
      loadingScreen.appendChild(progressContainer);
    }
    
    // Referencias a los elementos del progreso
    const progressBar = loadingScreen.querySelector('.loading-progress-bar');
    const progressText = loadingScreen.querySelector('.loading-progress-text');
    const loadingMessage = loadingScreen.querySelector('.loading-message');
    
    // Tiempo mínimo de carga reducido a 1 segundo
    const minLoadingTime = 1000; 
    let loadingStartTime = Date.now();
    
    // Contador de recursos cargados
    let resourcesLoaded = 0;
    
    // Obtener todos los recursos que necesitamos cargar
    const images = Array.from(document.images);
    const totalResources = Math.max(images.length, 5); // Mínimo 5 recursos
    
    // Mensajes para mostrar durante la carga
    const loadingMessages = [
      "Cargando recursos...",
      "Preparando formularios...",
      "Casi listo..."
    ];
  
    // Cambiar el mensaje cada 800ms (más rápido)
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      loadingMessage.textContent = loadingMessages[messageIndex];
      messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 800);
    
    // Simulación de progreso más rápida
    function simulateProgress() {
      let simulatedProgress = 0;
      const progressInterval = setInterval(() => {
        // Aumenta el progreso más rápido
        if (simulatedProgress < 50) {
          simulatedProgress += 5;
        } else if (simulatedProgress < 80) {
          simulatedProgress += 3;
        } else if (simulatedProgress < 99) {
          simulatedProgress += 1;
        }
        
        // Actualiza la barra de progreso
        progressBar.style.width = `${simulatedProgress}%`;
        progressText.textContent = `${Math.round(simulatedProgress)}%`;
        
        // Si llegamos al 100% o todos los recursos están cargados, detenemos la simulación
        if (simulatedProgress >= 100 || resourcesLoaded >= totalResources) {
          clearInterval(progressInterval);
          
          // Si todos los recursos están cargados, ocultamos la pantalla
          if (resourcesLoaded >= totalResources) {
            progressBar.style.width = '100%';
            progressText.textContent = '100%';
            setTimeout(hideLoadingScreen, 300);
          }
        }
      }, 80); // Actualiza el progreso más rápido
      
      return progressInterval;
    }
  
    // Inicia la simulación de progreso
    const progressSimulation = simulateProgress();
    
    // Función para actualizar el progreso real
    function updateProgress() {
      resourcesLoaded++;
      
      // Si todos los recursos están cargados, actualizamos al 100%
      if (resourcesLoaded >= totalResources) {
        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        clearInterval(progressSimulation); // Detiene la simulación
        setTimeout(hideLoadingScreen, 300);
      }
    }
    
    // Función para ocultar la pantalla de carga
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
      loadingMessage.textContent = "¡Bienvenido!";
      
      // Oculta la pantalla de carga
      loadingScreen.style.opacity = '0';
      
      // Establece un tiempo de espera para asegurarnos de que la transición termine
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.classList.add('content-loaded');
        
        // Asegúrate de que el formulario sea visible inmediatamente
        const formContainer = document.querySelector('.form-container');
        if (formContainer) {
          formContainer.style.opacity = '1';
          formContainer.style.transform = 'translateY(0)';
        }
      }, 500);
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
    
    // Tiempo máximo de espera reducido a 3 segundos
    setTimeout(hideLoadingScreen, 3000);
    
    // Añadir efecto de scroll al header
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  });