const relogio = document.querySelector('.relogio')
let seconds = 0
let timer;
const createHourSeconds = (seconds) =>{
    const data = new Date(seconds*1000) 
    return data.toLocaleTimeString('pt-BR',{
        hour12 : false,
        timeZone: 'UTC'
    })
}

const initeTimer = () => {
    clearInterval(timer)
    timer = setInterval(()=>{
        seconds++
        relogio.innerHTML = createHourSeconds(seconds)
    },1000)
}
document.addEventListener('click',(e)=>{
    const element = e.target
    if(element.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        initeTimer()
    }
    if(element.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
    
    if(element.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        seconds = 0
        relogio.innerHTML = "00:00:00"
    }
})
