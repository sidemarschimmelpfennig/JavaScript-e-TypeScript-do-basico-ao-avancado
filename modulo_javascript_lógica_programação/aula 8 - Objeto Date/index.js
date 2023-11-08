
//const date = new Date(2023, )
//nao existe 60 segundos ou minutos ou horas ele aumenta o valor proximo a exemplo 60segundos ele aumenta  1 minuto
//mes em javascript começa em 0 entao é do 0 a 11

//ano  mes dia minuto hora minuto segundo 
const data = new Date(2023,10,8, 15,14,60 )

console.log(`hoje é : ${data.toString()}`)

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // Mes Real 
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds()) 
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) //0 Domingo 6 Sabado

function addZeroEsq (num) {
    return num >= 10 ? num : `0${num}` 
}

const formatarData = (data) =>{
    const dia = addZeroEsq(data.getDate())
    const mes = addZeroEsq(data.getMonth() + 1)
    const ano = addZeroEsq(data.getFullYear())
    const hora = addZeroEsq(data.getHours())
    const minuto = addZeroEsq(data.getMinutes())
    const segundo = addZeroEsq(data.getSeconds())

    return  `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo} `
}

const dataHj = new Date()
const DataBrasil = formatarData(dataHj)  

console.log(DataBrasil)





