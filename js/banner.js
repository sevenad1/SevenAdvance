
// Slideshow automático do banner
document.addEventListener('DOMContentLoaded', function() {
    const bannerLinks = document.querySelectorAll('.banner-link');
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
        bannerLinks.forEach((link, i) => {
            link.style.display = (i === index) ? 'inline-block' : 'none';
        });
    }
    setInterval(() => {
        const prev = current;
        current = (current + 1) % images.length;
        images[prev].classList.remove('active');
        images[current].classList.add('active');
        bannerLinks.forEach((link, i) => {
            link.style.display = (i === current) ? 'inline-block' : 'none';
        });
    }, 3500);
    showBanner(current);
});
