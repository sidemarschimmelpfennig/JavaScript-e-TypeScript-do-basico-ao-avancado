function aleatory(min, max){
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function timerAwait (msg, time) {
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Bad Value')
        setTimeout(()=>{
            resolve(msg)
        },time)
    })
   
}


timerAwait('joao', aleatory(1,3)).then((response)=>{
        console.log(response)   
        return timerAwait('joao1', aleatory(1,3))
    })
.then((response)=>{
        console.log(response)
        return timerAwait('joao2', aleatory(1,3))
    })
.then((response)=>{
    console.log(response)
})
.catch(e => {
    console.log('ERRO :', e)
})


