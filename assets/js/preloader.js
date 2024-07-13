document.body.style.overflow = 'hidden';
setTimeout(function() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 1000); // Match this duration with the CSS transition time
  }, 3000);