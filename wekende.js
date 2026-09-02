git add .
git commit -m "html todo com capa full"
git push

function abrirCarta(tipo){
  const carta = document.getElementById('carta');
  const texto = document.getElementById('texto-carta');
  
  if(tipo === 'saudade'){
    texto.innerHTML = "Se voce ta com saudade, fecha os olhos. E o meu abraco te encontrando ai onde voce ta. Eu to com saudade tambem, e e por isso que eu fiz tudo isso, pra voce nunca se sentir longe de mim.";
  }
  if(tipo === 'triste'){
    texto.innerHTML = "Ei, olha pra mim (mesmo que so na sua mente). Voce e a pessoa mais forte e linda que eu conheco. Respira fundo, isso vai passar e eu vou estar aqui, sempre.";
  }
  if(tipo === 'amor'){
    texto.innerHTML = "Voce tem duvida? Entao le de novo tudo que eu escrevi nesse site. Cada linha, cada musica, cada detalhe e so pra te provar que eu te amo mais do que ontem.";
  }
  
  carta.style.display = 'block';
  carta.scrollIntoView({behavior: 'smooth'});
}

function fecharCarta(){
  document.getElementById('carta').style.display = 'none';
}