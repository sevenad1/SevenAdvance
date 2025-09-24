

// Slideshow automático do banner com transição suave
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.banner img');
    let current = 0;
    let timer;

    function showBanner(index, prev = null) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)';
                img.style.opacity = 1;
                img.style.zIndex = 2;
                img.classList.add('active');
            } else {
                img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)';
                img.style.opacity = 0;
                img.style.zIndex = 1;
                img.classList.remove('active');
            }
        });
        // Garante que o anterior fique atrás até terminar o fade
        if (prev !== null && prev !== index) {
            setTimeout(() => {
                images[prev].style.zIndex = 1;
            }, 1200);
        }
    }

    function nextBanner() {
        const prev = current;
        current = (current + 1) % images.length;
        showBanner(current, prev);
    }

    // Inicializa o primeiro banner
    showBanner(current);

    // Garante que só um timer rode
    if (timer) clearInterval(timer);
    timer = setInterval(nextBanner, 5000); // Troca a cada 5 segundos

    // Pausa ao passar o mouse
    const bannerDiv = document.querySelector('.banner');
    if (bannerDiv) {
        bannerDiv.addEventListener('mouseenter', () => clearInterval(timer));
        bannerDiv.addEventListener('mouseleave', () => {
            timer = setInterval(nextBanner, 5000);
        });
        // Avança manualmente ao clicar no banner
        bannerDiv.addEventListener('click', nextBanner);
        bannerDiv.style.cursor = 'pointer';
    }
});
