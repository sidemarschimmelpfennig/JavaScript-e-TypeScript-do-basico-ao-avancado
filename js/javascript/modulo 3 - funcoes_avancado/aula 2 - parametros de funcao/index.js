/*
*argumentos podem ser colocados na chamada da funçao mesmo ela nao tendo um sem error

voce pode utilizar os paramentros quando nao existir 
a variavel arguments so vale para a function
*/
function funcao (){
    let total = 0
    for(argumento of arguments){
        total += argumento
    }
    console.log(total)
}

funcao(1,2,3,4)

function funcao1 (a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}

funcao1(1,2,3,4)


function funcao2 ([a,b,c,d,e,f]){
    console.log(a,b,c,d,e,f)
}
funcao2([1,2,3,4,5,6])
function funcao3 ({a,b,c,d,e,f}){
    console.log(a,b,c,d,e,f)
}

funcao3({a : 1,b: 2,c: 3,d: 4, e: 5, f :6})



function conta (operador, acumulador , ...numeros){
    if (operador === '*' || operador === '/'){
        acumulador = 1
    }    
    for (let numero of numeros){
        switch (operador){
            case '+': acumulador += numero
            break;
            case '-': acumulador -= numero
            break;
            case '*': 
                acumulador *= numero
            break;
            case '/':  
                acumulador /= numero
            break;
        default:
            return  console.log('operador não existe')
        }
        
    }
    console.log(acumulador)
}

conta('/', 0, 10,20,30,40,50)

//maneira possivel de pegar os arguments na arrow function com rest operator 

const teste = (...args) =>{
    console.log(args)
}

teste(1,2,3)