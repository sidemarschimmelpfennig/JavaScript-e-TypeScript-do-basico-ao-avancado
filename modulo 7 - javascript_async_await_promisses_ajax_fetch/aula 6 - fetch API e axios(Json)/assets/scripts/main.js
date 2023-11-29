/*fetch('pessoas.json')
.then(response => response.json())
.then(json => uploadPageElements(json))*/

axios('pessoas.json').then(response => uploadPageElements(response.data))
function uploadPageElements(json){
    const table = document.createElement('table')

    for(let pessoa of json){
        
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)

        const result = document.querySelector('#resultado')
        result.appendChild(table)
    }
}