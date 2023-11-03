let pergunte = Number(prompt("Digite um número :"))
const span = document.getElementById("counter")
const math = document.getElementById("math")

    span.innerHTML = pergunte 
    math.innerHTML = ''
    math.innerHTML = `Raiz Quadrada : ${(pergunte ** 0.5) } </br>
    ${pergunte} é inteiro : ${Number.isInteger(pergunte)} </br>
    É NaN : ${Number.isNaN(pergunte)} </br>
    Arredonde para baixo : ${Math.floor(pergunte)} </br>
    Raiz Quadrada : ${Math.ceil(pergunte)} </br>
    Com Duas casas decimais : ${pergunte.toFixed(2)}`


