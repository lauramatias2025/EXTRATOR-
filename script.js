const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click',mostraPalavraschave);

function mostraPalavraschave(){
   const texto = document.querySelector ('#entrada-de-texto').value;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavras = texto.split (" ");
   campoResultado.textContent = palavras.join(", "); 
}