(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Selecciona todas las imágenes de las celdas (excluye videos)
  const imgs = document.querySelectorAll('.cell img, .row1-left img');

  imgs.forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Cerrar al hacer clic en el fondo
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      cerrar();
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrar();
  });

  function cerrar() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }
})();