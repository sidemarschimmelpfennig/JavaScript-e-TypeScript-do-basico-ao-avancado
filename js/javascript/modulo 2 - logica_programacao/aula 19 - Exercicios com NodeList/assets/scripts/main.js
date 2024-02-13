const paragrafos = document.querySelector('#paragrafos')
const listaParagrafos = paragrafos.querySelectorAll("p")

const stylesBody = getComputedStyle(document.body)
const background = stylesBody.backgroundColor

for (let p of listaParagrafos){
    //mudar o background
    p.style.backgroundColor = background
    //mudar a cor do texto
    p.style.color = "#fff"
    // arredondar a borda
    p.style.borderRadius = "10px"
}