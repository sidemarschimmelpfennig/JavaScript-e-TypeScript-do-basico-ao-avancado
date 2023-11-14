/*
TRATAMENTO DE ERROS
try{

}catch(error){

}

*/


/*try{
    console.log(naoExxisto)
} catch(err){
    console.log('naoExxisto nao existe' );
    console.log(err)
}*/

const soma = (numOne, numTwo) =>{
    if (typeof numOne!== 'number' || typeof numTwo !== 'number'){
        throw new Error('ambos os valores necessitam ser numeros!!')
    }
    return numOne + numTwo
}

try{
    console.log(soma(1,'2'))
}catch(error){
    console.log(error)
}
