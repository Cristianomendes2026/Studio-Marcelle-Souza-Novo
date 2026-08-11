// ==========================
// MENU MOBILE
// ==========================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    opened ? 'true' : 'false'
  );
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});


// ==========================
// GALERIA — AMPLIAR FOTO
// ==========================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');


// Verifica se o Lightbox existe
if (lightbox && lightboxImg) {

  // Todas as fotos da galeria
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {

    item.addEventListener('click', function (event) {

      // Evita qualquer comportamento padrão do botão
      event.preventDefault();

      const img = this.querySelector('img');

      // Se não encontrar a imagem, não faz nada
      if (!img) return;

      // Coloca a imagem clicada dentro do Lightbox
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;

      // Abre o Lightbox
      lightbox.classList.add('open');

      lightbox.setAttribute('aria-hidden', 'false');

      // Impede que a página role enquanto a foto estiver aberta
      document.body.style.overflow = 'hidden';
    });
  });


  // ==========================
  // FECHAR FOTO
  // ==========================

  function closeLightbox() {

    lightbox.classList.remove('open');

    lightbox.setAttribute('aria-hidden', 'true');

    lightboxImg.src = '';

    // Libera novamente a rolagem da página
    document.body.style.overflow = '';
  }


  // Botão X
  lightboxClose?.addEventListener('click', closeLightbox);


  // Clicar fora da imagem
  lightbox.addEventListener('click', function (event) {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  // Tecla ESC
  document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
      closeLightbox();
    }

  });

}
