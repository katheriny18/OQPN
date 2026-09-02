const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal-teia');
const tituloModal = document.getElementById('modal-titulo');
const textoModal = document.getElementById('modal-texto');
const fechar = document.querySelector('.fechar');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const titulo = card.querySelector('span').innerText;
    const texto = card.getAttribute('data-full');
    
    tituloModal.innerText = titulo;
    textoModal.innerText = texto;
    modal.classList.add('ativa');
  });
});

fechar.addEventListener('click', () => {
  modal.classList.remove('ativa');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('ativa');
  }
});