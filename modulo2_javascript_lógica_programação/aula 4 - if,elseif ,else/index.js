/*
if
else if 
else
*/
let hora = 25
if(hora >= 0 && hora < 6 ){
    console.log("Boa Madrugada Usuario !!")
}
else if(hora <= 12 && hora >= 6 ){
    console.log("Bom dia Usuario !!")
}
else if (hora > 12 && hora <= 18 ){
    console.log("Boa Tarde Usuario !!")
}else if (hora > 18 && hora <= 23.59){
    console.log("Boa Noite Usuario !!")
}else{
    console.log("Olá")
}

const tenhoDinheiro = true

if(tenhoDinheiro){
    console.log("vou sair")
}else{
    console.log("não vou sair")
}