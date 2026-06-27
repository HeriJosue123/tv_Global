function playMatch(title, videoUrl) {
    const player = document.getElementById('main-player');
    const matchTitle = document.getElementById('match-title');
    
    // Cambiar la fuente del video
    player.src = videoUrl;
    
    // Cambiar el título
    matchTitle.textContent = title;
    
    // Reproducir automáticamente al hacer clic
    player.play().catch(error => {
        console.log("La reproducción automática requiere interacción en algunos navegadores:", error);
    });
    
    // Hacer scroll suave hacia el reproductor
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
