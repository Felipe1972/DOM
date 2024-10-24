document.write("Oi Pessoal!")
document.getElementById("#teste")

let elemento = document.getElementById("elemento")

elemento.textContent= "Outra coisa"

let textos = document.getElementsByClassName("texto")
console.log(textos.length)

textos[0].innerText = "primeiro texto modificado"

let paragrafo = document.getElementById("paragrafo")
paragrafo.style.color = 'blue' 

paragrafo.style.fontSize = '20px'