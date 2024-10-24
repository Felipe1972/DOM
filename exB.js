let titulo = document.getElementById("titulo")
let nome = prompt("Qual é o seu nome?")
let cor = prompt("Diga sua cor favorita [em inglês]")



titulo.textContent = `Bem vindo, ${nome}`
titulo.style.color = `${cor}`