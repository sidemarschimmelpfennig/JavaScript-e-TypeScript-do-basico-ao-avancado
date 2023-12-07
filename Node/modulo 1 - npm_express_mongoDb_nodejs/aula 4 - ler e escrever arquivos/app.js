const path = require('path')
const { escreveJson, escreveTXT } = require('./modulos/escrever')
const caminhoArquivo = path.resolve(__dirname,'arquivos', 'teste.txt')
const caminhoPessoaJson = path.resolve(__dirname,'arquivos', 'teste.json')
const ler = require('./modulos/ler')

/*const pessoas = [
    {nome : 'Joao'},
    {nome : 'Paulo'},
    {nome : 'Eduardo'},
    {nome : 'Maria'},
    {nome : 'Joao'},
    {nome : 'Eduarda'},
]
const json = JSON.stringify(pessoas, '' , 2)

escreveJson(caminhoPessoaJson, json)
escreveTXT(caminhoArquivo, 'Pesssoas\n')*/
async  function lerArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados)
}



function renderizaDados(dados){
    console.log(dados)
}


lerArquivo(caminhoPessoaJson)