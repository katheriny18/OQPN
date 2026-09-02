git add .
git commit -m "html todo com capa full"
git push

function abrirCarta(tipo){
  const carta = document.getElementById('carta');
  const texto = document.getElementById('texto-carta');
  
  if(tipo === 'saudade'){
    texto.innerHTML = "Se você tá com saudade, fecha os olhos. É o meu abraço te encontrando aí onde você tá. Eu tô com saudade também, e é por isso que eu fiz tudo isso, pra você nunca se sentir longe de mim.";
  }
  if(tipo === 'triste'){
    texto.innerHTML = "Ei, olha pra mim (mesmo que só na sua mente). Você é a pessoa mais forte e linda que eu conheço. Respira fundo, isso vai passar e eu vou estar aqui, sempre.";
  }
  if(tipo === 'amor'){
    texto.innerHTML = "Você tem dúvida? Então lê de novo tudo que eu escrevi nesse site. Cada linha, cada música, cada detalhe é só pra te provar que eu te amo mais do que ontem.";
  }
  
  carta.style.display = 'block';
  carta.scrollIntoView({behavior: 'smooth'});
}

function fecharCarta(){
  document.getElementById('carta').style.display = 'none';
}