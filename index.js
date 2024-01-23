const botão = document.getElementById("confirmar")
const texto = document.getElementById("texto")
const imagem = document.getElementById("imagem")

function clicado() {
    const ano = new Date()
    const ano_1 = ano.getFullYear()
    const numero = parseInt(document.getElementById("numero").value);
    const conta =  (ano_1 - numero)
    const conta_1 = 1

    if (document.getElementById("sexualidade_1").checked && conta <= 12) {
        texto.innerText = `ele é um menino de ${conta} anos`
        imagem.innerHTML = '<img src="download (5).jpg" alt="" id="imagens">'
    } else if (document.getElementById("sexualidade").checked && conta<= 12) {
        texto.innerText = `ela é uma menina de ${conta} anos`
        imagem.innerHTML = '<img src="download (4).jpg" alt="" id="imagens">'
   }  else if (document.getElementById("sexualidade_1").checked && conta >= 18 && conta < 79) {
    texto.innerText = `ele é um homen de ${conta} anos`
    imagem.innerHTML = '<img src="download (1).jpg" alt="" id="imagens">'
      }  else if (document.getElementById("sexualidade").checked && conta >= 18 && conta < 79) {
        texto.innerText = `ela é um mulher de ${conta} anos` 
        imagem.innerHTML = '<img src="download.jpg" alt="" id="imagens">'
   } else if (document.getElementById("sexualidade").checked && conta >= 80 && conta < 100) {
    texto.innerText = `ela é uma idosa de ${conta} anos`
    imagem.innerHTML = '<img src="download (3).jpg" alt="" id="imagens">'
    } else if (document.getElementById("sexualidade_1").checked && conta >= 80 && conta < 100) {
    texto.innerText = `ele é um idoso de ${conta} anos`
    imagem.innerHTML = '<img src="download (2).jpg" alt="" id="imagens">'
    } else if (document.getElementById("sexualidade_1").checked) {
    texto.innerText = `ele é um homen de ${conta} anos`
    } else if (document.getElementById("sexualidade").checked) {
    texto.innerText = `ela é uma mulher de ${conta} anos`
   }  else {
        alert("Voce não colocou a sexualidade")
  }

  for (let i = 0; i <= 100; i++ ) {
    console.log(`Ola ${i}`)
  }
}



botão.addEventListener("click", clicado)