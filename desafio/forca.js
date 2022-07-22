const frutas = [
  "banana", "morango", "abacaxi", "pera", "uva"
];
const palavraSecreta = frutas[Math.floor(Math.random() * frutas.length)];
const letrasCorretas = [];
const letrasErradas = [];
const quantidadeVidas = 6;


document.addEventListener("keydown", (evento) => {
  const caractere = evento.keyCode; 
  if(isLetra(caractere)) {
    const letra = evento.key;
    if(letrasErradas.includes(caractere)){
      quantidadeVidas --;
    } else {
      if(palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
    } else {
      letrasErradas.push(letra);
    }
  }
  buscarDadosDoJogo();
  }
})

function buscarDadosDoJogo () {
  buscarPalavra();
  buscarEstado();
}

function buscarPalavra() {
  palavraSecreta.split("").forEach(letra => {
    if(letrasCorretas.includes(letra)) {
      palavraSecreta += '${letra}';
    } else {
      palavraSecreta += '_';
    }
  })
}

function buscarEstado () {
  let mensagem = "";
  if(letrasErradas.length == 6) {
    let t1 = document.createTextNode("Você perdeu!");
    mensagem.appendChild(t1);
  }

  if(palavraSecreta === "abacaxi") {
    let t2 = document.createTextNode("Você ganhou!");
    mensagem.appendChild(t2);
  } else {
    let t3 = document.createTextNode("Aguardando chute!");
    mensagem.appendChild(t3);
  }
}

function quantidadeVidas () {
  console.log (quantidadeVidas);
}


module.exports = Forca;
