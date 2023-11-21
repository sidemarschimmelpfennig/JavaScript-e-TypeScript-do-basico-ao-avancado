const retornaHora = () =>{
    let data = new Date()
    return data.toLocaleTimeString('pt-BR')
}



const interval = setInterval(() => console.log(retornaHora()), 1000)

setTimeout(()=>clearInterval(interval),11000)