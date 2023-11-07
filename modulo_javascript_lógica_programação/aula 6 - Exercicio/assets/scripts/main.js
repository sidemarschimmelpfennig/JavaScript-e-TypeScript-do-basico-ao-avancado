const form = document.querySelector("#form")

form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('evento previnido ')
    setResult("Olá mundo!")
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")
   
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    if (!peso){
        setResult("Peso inválido", false)
        return;
    }
    if (!altura){
        setResult("Altura inválida", false)
        return;
    }
    
    const imc = getImc(peso, altura)
    if (imc > 18.5  && imc < 25){
        setResult(`Seu IMC é ${imc}(${nivel(imc)})`, true ) 
    }else{
        setResult(`Seu IMC é ${imc}(${nivel(imc)})`, false) 
    }
    
})
const nivel = (imc) =>{
    result = imc
    const message = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2",
    "Obesidade grau 3"  ]
        if(result >= 39.9) return message[5];
        if(result >= 34.9) return message[4];
        if(result >= 29.9) return message[3];
        if(result >= 24.9) return message[2];
        if(result >= 18.5){ 
            return message[1] }
        if(result < 18.5){
            return message[0]
        } 
}
const getImc = (peso, altura) =>{
    const imc = peso/ altura **2
    return imc.toFixed(2)
}

function createP (){
    const p = document.createElement('p')
    return p;
}

function setResult (msg , isValid = Boolean){
    const result = document.querySelector("#result")
    result.innerHTML = ''
    const p = createP()

    if (isValid) p.classList.add('success')
    if (!isValid) p.classList.add('failed')

    p.innerHTML = msg
    result.appendChild(p)
} 