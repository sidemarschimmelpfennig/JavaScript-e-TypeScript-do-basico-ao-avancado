const h1 = document.querySelector(".container h1")
h1.innerHTML = `é um teste`




/*
const diaSemana = data.getDay()
function getDia (diaSemana){
let diaSemanaText
switch (diaSemana) {
    case 1:
        diaSemanaText = 'Segunda-Feira'
        return diaSemanaText
    case 2:
        diaSemanaText = 'Terça-Feira'
        return diaSemanaText
    case 3:
        diaSemanaText = 'Quarta-Feira'
        return diaSemanaText
    case 4:
        diaSemanaText = 'Quinta-Feira'
        return diaSemanaText
    case 5:
        diaSemanaText = 'Sexta-Feira'
        return diaSemanaText
    case 6:
        diaSemanaText = 'Sabado'
        return diaSemanaText
    default:
        diaSemanaText = 'Domingo'
        return diaSemanaText
}}
function nomeMes(mounth){
let mesAnoTxt 
switch (mounth) {
    case 1:
        mesAnoTxt = 'Fevereiro'
        return mesAnoTxt
    case 2:
        mesAnoTxt = 'Março'
        return mesAnoTxt
    case 3:
        mesAnoTxt = 'Abril'
        return mesAnoTxt
    case 4:
        mesAnoTxt = 'Maio'
        return mesAnoTxt
    case 5:
        mesAnoTxt = 'Junho'
        return mesAnoTxt
    case 6:
        mesAnoTxt = 'Julho'
        return mesAnoTxt
    case 7:
        mesAnoTxt = 'Agosto'
        return mesAnoTxt
    case 8:
        mesAnoTxt = 'Setembro'
        return mesAnoTxt
    case 9:
        mesAnoTxt = 'Outubro'
        return mesAnoTxt
    case 10:
        mesAnoTxt = 'Novembro'
        return mesAnoTxt
    case 11:
        mesAnoTxt = 'Dezembro'
        return mesAnoTxt
    default:
        mesAnoTxt = 'Janeiro'
        return mesAnoTxt
}
}
function addZeroEsq (num) {
    return num >= 10 ? num : `0${num}` 
}
function criarDiaMes (data) {
    const diaSemana = getDia(data.getDay())
    const dia = addZeroEsq(data.getDate())
    const mes = nomeMes(data.getMonth())
    const ano = data.getFullYear()
    const hora = addZeroEsq(data.getHours())
    const minuto = addZeroEsq(data.getMinutes())

    return  ` ${diaSemana},  ${dia} de ${mes} de ${ano} ${hora}:${minuto}`
}

h1.innerHTML = criarDiaMes(data)*/

const data = new Date()

const opcoesData = {
    dateStyle: 'full',
};

const opcoesHora = {
    timeStyle: 'short',
};

const dataFormatada = data.toLocaleDateString('pt-BR', opcoesData);
const horaFormatada = data.toLocaleTimeString('pt-BR', opcoesHora);

const resultado = `${dataFormatada} ${horaFormatada}`;

h1.innerHTML = resultado;