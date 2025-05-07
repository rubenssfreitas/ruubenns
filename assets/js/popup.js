var videos = document.querySelectorAll('video');

// Clique ou toque para tocar/parar
videos.forEach(video => {
    const togglePlay = () => {
        video.classList.toggle('active');

        if (video.paused) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    };

    video.addEventListener('click', togglePlay);
    video.addEventListener('touchstart', togglePlay); // suporte para mobile
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
    threshold: 0.25
});

videos.forEach(video => observer.observe(video));