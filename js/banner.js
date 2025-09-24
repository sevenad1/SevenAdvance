
// Slideshow automático do banner
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.banner img');
    let current = 0;
    function showBanner(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }
    setInterval(() => {
        const prev = current;
        current = (current + 1) % images.length;
        images[prev].classList.remove('active');
        images[current].classList.add('active');
    }, 5000); // Muda a cada 5 segundos
    showBanner(current);
});
