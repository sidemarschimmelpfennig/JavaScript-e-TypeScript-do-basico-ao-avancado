class validaFormulário {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    handleSubmit(e){
        e.preventDefault()
        const checkFields = this.checkFields()
        const checkPasswords = this.checkPasswords()

        if (checkFields && checkPasswords){
            alert('Formulário enviado !!')
            this.formulario.submit()
        }
    }

    eventos(){
        this.formulario.addEventListener('submit',(e)=>{
            this.handleSubmit(e)
        })
    }

    checkFields(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }
        for (let field of this.formulario.querySelectorAll('.validar')){
            const label = field.previousElementSibling.innerText
            if(!field.value){
                this.createErro(field, `Campo ${label} nao pode estar em branco`)
            }
            if(field.classList.contains('cpf')){
                if(!this.cpfValidate(field)) valid = false
            }
            if(field.classList.contains('usuario')){
                if(!this.userValidate(field)) valid = false
            }
        }
        
        return valid
    }

    checkPasswords () {
        let valid = true;
        const password = this.formulario.querySelector('.senha')
        const passwordRepeat = this.formulario.querySelector('.repetir-senha')

        if (password.value !== passwordRepeat.value ){
            valid = false
            this.createErro(password , 'Campos senha e repetir senha precisam ser iguais!!')
            this.createErro(passwordRepeat , 'Campos senha e repetir senha precisam ser iguais!!')
        }
        if(password.value.length < 6 || password.value.length > 12){
            valid = false
            this.createErro(password, 'Senha precisa ter entre 6 e 12 caracteres.')
        }

        return valid
    }

    cpfValidate (field){
        const cpf = new ValidaCPF(field.value)

        if(!cpf.valida()){
            this.createErro(field , 'CPF inválido')
            return false
        }
        return true
    }

    userValidate (field){
        const user = field.value
        let valid = true
        if (user.length < 3 || user.length > 12){
            this.createErro(field , 'Usuário deve ter entre 3 a 12 digitos')
            valid = false
        }
        if(!user.match(/[a-zA-Z0-9]+$/g)){
            this.createErro(field , 'Nome de usuário precisa ter apenas letras ou numeros!!')
            valid = false
        }

        return valid
    }

    createErro (field , msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
}

const validate = new validaFormulário()