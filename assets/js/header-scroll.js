function syncMenuScrollOffset() {
    var header = document.getElementById('header');
    if (!header) return;
    document.documentElement.style.setProperty('--menu-scroll-offset', (header.offsetHeight + 24) + 'px');
}

syncMenuScrollOffset();
window.addEventListener('resize', syncMenuScrollOffset);
window.addEventListener('load', syncMenuScrollOffset);

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

