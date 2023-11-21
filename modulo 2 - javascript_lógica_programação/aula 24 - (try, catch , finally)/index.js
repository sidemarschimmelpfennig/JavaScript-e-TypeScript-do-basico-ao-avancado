

try{
    console.log('Abri o arquivo')
    console.log('Manipulei o arquivo')
    console.log('Fechei o arquivo')
}catch(e){
    console.log('Tratei o erro')
}finally{
    console.log('Sempre serei executado')
}


function retornaHora(data){
    if (data && !(data instanceof Date)){
       throw new TypeError('Esperando extancia de Error')
    }
    if (!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {

    })
}
try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11)
    console.log(retornaHora(data))
    console.log(hora)
}catch(error){

}finally{
    console.log("tenha um bom dia")
}
