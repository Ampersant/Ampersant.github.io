document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // You can adjust this value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

