(function () {
  var preloader = document.getElementById('preloader');
  if (!preloader) return;

  document.body.style.overflow = 'hidden';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fadeMs = 650;
  var visibleFor = 600;
  var paths = preloader.querySelectorAll('.logo-path');

  if (!reduceMotion && paths.length) {
    paths.forEach(function (path) {
      path.style.setProperty('--len', path.getTotalLength() + 'px');
    });

    preloader.classList.add('is-drawing');
    void preloader.offsetWidth;

    requestAnimationFrame(function () {
      preloader.classList.add('draw');
    });

    visibleFor = 2800;
  } else {
    preloader.classList.add('is-drawing');
  }

  setTimeout(function () {
    preloader.classList.add('hidden');
    setTimeout(function () {
      preloader.style.display = 'none';
      document.body.style.overflowY = 'visible';
    }, fadeMs);
  }, visibleFor);
})();
