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

document.getElementById('btn-final').addEventListener('click', () => {
  document.getElementById('btn-final').innerHTML = "EU TE AMO MAIS ❤️";
  
  // Efeito de corações
  for(let i=0; i<20; i++){
    setTimeout(()=>{
      const coracao = document.createElement('div');
      coracao.innerHTML = "❤️";
      coracao.style.position = "fixed";
      coracao.style.left = Math.random()*100 + "vw";
      coracao.style.top = "100vh";
      coracao.style.fontSize = "24px";
      coracao.style.animation = "subir 3s linear forwards";
      coracao.style.zIndex = "9999";
      coracao.style.pointerEvents = "none";
      document.body.appendChild(coracao);
      setTimeout(()=> coracao.remove(), 3000);
    }, i*100);
  }
});

// Animação dos corações
const style = document.createElement('style');
style.innerHTML = `@keyframes subir { to { transform: translateY(-110vh) rotate(360deg); opacity: 0; } }`;
document.head.appendChild(style);