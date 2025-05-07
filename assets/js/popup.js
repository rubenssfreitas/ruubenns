
var videos = document.querySelectorAll('video');

// Clique para tocar/parar
videos.forEach(video => {
    video.addEventListener('click', () => {
        video.classList.toggle('active');

        if (video.paused) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
});

// Parar vídeo ao sair da tela
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.pause();
            entry.target.currentTime = 0;
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.25 // Ajuste conforme necessário
});

// Observar todos os vídeos
videos.forEach(video => observer.observe(video));