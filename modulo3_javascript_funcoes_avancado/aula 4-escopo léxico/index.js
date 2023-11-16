//Escopo Léxico
/*
A funcao tem tem ciencia do que esta dentro dela
e do que esta fora dando prioridade ao que estiver 
dentro

*/
const nome = 'Sidemar'

function falaNome() {
    const nome = 'Junior'
    console.log(nome)
}

falaNome()

function usaFalaNome(){
    falaNome()
}

usaFalaNome()