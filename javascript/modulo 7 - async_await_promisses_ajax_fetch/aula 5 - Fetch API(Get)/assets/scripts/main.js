document.addEventListener('click'  , e =>{
    const element = e.target
    const tag = element.tagName.toLowerCase()

    if (tag === 'a'){
        e.preventDefault()
        carregaPagina(element)
    }
})

async function carregaPagina(element){
    try{
        const href = element.getAttribute('href')
        const response = await fetch(href)
        if (response.status !== 200) throw new Error('Erro 404')
        const html = await response.text()
        carregaResultado(html)
    }catch(e){
        console.error(e)
    }
 
    
    /*fetch(href)
    .then(response => {
        if (response.status !== 200) throw new Error('Erro 404')
        return response.text()
    })
    .then(html => carregaResultado(html))
    .catch(e=>{
        console.error(e)
    })*/
}

function  carregaResultado(response){
    const result = document.querySelector('.resultado') 
    result.innerHTML = response
}

