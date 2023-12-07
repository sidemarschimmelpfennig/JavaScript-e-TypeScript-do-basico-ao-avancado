//le os arquivos e  mostra o que tem na pasta 
const fs = require('fs').promises
const path = require('path')

async function readdir(dirName){
    dirName = dirName || path.resolve(__dirname)
    const files = await fs.readdir(dirName)
    walk(files, dirName)
}

async function walk(files, dirName){
    for (let file of files){
        const fileFullPath = path.resolve(dirName, file)
        const result = await fs.stat(fileFullPath)
        if(/\.git/g.test(fileFullPath))continue
        if(/\node_modules/g.test(fileFullPath)) continue
        if(result.isDirectory()){
            readdir(fileFullPath)
            continue
        }
        if(!/\.css/g.test(fileFullPath))continue
        console.log(fileFullPath)
    }
}
readdir('/Sidemar/WorkSpace/JavaScript-e-TypeScript-do-basico-ao-avancado/javascript')