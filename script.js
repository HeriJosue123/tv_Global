function playMatch(title, videoUrl) {
    const player = document.getElementById('main-player');
    const matchTitle = document.getElementById('match-title');
    
    // Cambiar la fuente del video
    player.src = videoUrl;
    
    // Cambiar el título
    matchTitle.textContent = title;
    
    // Los iframes cargan su reproductor automáticamente. No es necesario llamar a .play()
    
    // Hacer scroll suave hacia el reproductor
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
