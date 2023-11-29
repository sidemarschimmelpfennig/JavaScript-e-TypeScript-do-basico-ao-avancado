function aleatory(min, max){
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function timerAwait (msg, time) {
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('Bad Value')
                return
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise')          
        },time)
    })
   
}


timerAwait('Promise 1', aleatory(0,3))
.then(response => {
    console.log(response)
    return timerAwait('Promise 2', aleatory(0,3))
})
.then(response => {
    console.log(response)
    return timerAwait('Promise 3', aleatory(0,3))
}).then(response =>{
    console.log(response)
}
).catch(err=>console.log(err))
//estados das promises (pending -> fullfilled || rejected)
async function execute() {
    try{
        const fase1 = await timerAwait('Promise 1', aleatory(0,3))
        console.log(fase1)
        const fase2 = await timerAwait('Promise 2', aleatory(0,3))
        console.log(fase2)
        const fase3 = await timerAwait('Promise 3', aleatory(0,3))
        console.log(fase3)
    }catch(e){
        console.log(e)
    }
}

execute()