function criaPessoa(nome,sobrenome){
    return {nome, sobrenome}
}

const p1 = criaPessoa('Sidemar', 'Junior')
const p2 = {
    nome : 'Sidemar',
    sobrenome: 'Junior'
}

console.log(p1, p2)


function falaFrase(comeco){
    function falaresto(resto){
        return comeco + ' ' + resto
    }
    return falaresto
}


const OlaMundo = falaFrase('Olá')
console.log(OlaMundo('mundo!'))
//exemplo de utilizaçao codigo acima 
//ocorre um Function Closures ou Fechamento
function aumenta(multiplicador){
    return function (n){
        return n * multiplicador
    }
}

const duplica = aumenta(2)
const triplica = aumenta(3)
const quadriplica = aumenta(4)

console.log(duplica(3))
console.log(triplica(2))
console.log(quadriplica(10))