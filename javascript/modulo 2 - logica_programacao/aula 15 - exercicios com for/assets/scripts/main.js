const result = document.querySelector('#resultado');
const div = document.createElement('div')
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'footer', texto: 'Frase 3'},   
];

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let createTag = document.createElement(tag)
    let createText = document.createTextNode(texto) 
    
    createTag.appendChild(createText)
    div.appendChild(createTag)
}
result.appendChild(div)