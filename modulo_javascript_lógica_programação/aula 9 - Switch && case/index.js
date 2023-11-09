/*
SWICTH CASE ==============




*/
const data = new Date("1998-04-21 00:00:00")
const diaSemana = data.getDay()
let diaSemanaText

switch (diaSemana) {
    case 1:
        diaSemanaText = 'Segunda'
        break;
    case 2:
        diaSemanaText = 'Terça'
        break;
    case 3:
        diaSemanaText = 'Quarta'
        break;
    case 4:
        diaSemanaText = 'Quinta'
        break;
    case 5:
        diaSemanaText = 'Sexta'
        break;
    case 6:
        diaSemanaText = 'Sabado'
        break;
    default:
        diaSemanaText = 'Domingo'
        break;
}

console.log(diaSemanaText)