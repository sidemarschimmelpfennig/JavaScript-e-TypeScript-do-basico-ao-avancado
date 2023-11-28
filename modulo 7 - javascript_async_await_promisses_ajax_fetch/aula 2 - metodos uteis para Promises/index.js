function aleatory(min, max){
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function timerAwait (msg, time) {
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') {
            reject('Bad Value')
            return
        } 
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ': Promise')
        },time)
    })
   
}

const promises=[
    //'Primero Valor',
    timerAwait('Promise 1', aleatory(1 , 5)),
    timerAwait('Promise 2', aleatory(1 , 5)),
    timerAwait('Promise 3', aleatory(1 , 5)),
    //'Outro Valor'
]

//resolve tudo porem se uma estiver errada rejeita tudo
/*Promise.all(promises).then(
    (valor)=>{
        console.log(valor)
    }
).catch((err)=>{
    console.log(err)
})*/

//estilo corrida a primeira a ser resolvida
Promise.race(promises).then(
    function(valor){
        console.log(valor)
    } 
).catch(err => {
    console.log(err)
})

//o resolve faz um retorno da promeça 
// ja o reject rejeita a operaçao
function baixaPagina(){
    const emCache = true
    if (emCache){
        return Promise.resolve('Pagina em cache')
    }else{
        return timerAwait('Baixei a Pagina', 3000)
    }
    return Promise.reject('error')
}

baixaPagina().then().catch(e => console.log(e))