const form = document.querySelector(".form")
const result = document.querySelector(".result")

function myScope(){
    const people = []
    function recebeForm(e){
        e.preventDefault()
        const nameForm = form.querySelector(".name") 
        const lastNameForm = form.querySelector(".lastName")
        const weightForm = form.querySelector(".weight")
        const heigthForm = form.querySelector(".heigth")
        people.push({nome : nameForm.value,
            sobrenome : lastNameForm.value,
            altura : heigthForm.value,
            peso : weightForm.value
        })
        console.log(people)
        result.innerHTML += `<p> ${nameForm.value} ${lastNameForm.value}  
        ${heigthForm.value} ${weightForm.value} </p>`
    }
    
    /*form.onsubmit =  function (enveto) {
        enveto.preventDefault()
        alert(1)
    }*/
   

    form.addEventListener("submit", recebeForm)
}

myScope()