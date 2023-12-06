function createCalc (){
    
    return{
        //atributos
        display: document.querySelector('.display'),
        btnClear : document.querySelector('.btn-clear'),
        //metodos
        inite(){
         this.clickbuttons()  
         this.keyPressEnter()
         this.display.focus()
        },    
        clickbuttons(){
            //aqui o this é calculadora 
            //arrow function nao muda o comportamento do this no caso ela nao causa problema
            document.addEventListener('click', e=>{
                const element = e.target

                if(element.classList.contains('btn-num')){
                    this.btnToDisplay(element.innerText)
                }
                if (element.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if (element.classList.contains('btn-del')){
                    this.deleteOne()
                }
                if (element.classList.contains('btn-eq')){
                    this.calculate()
                }
            })
        },
        calculate(){
            let calc = this.display.value

            try{
                calc = eval(calc)
                if(!calc){
                    alert("conta invalida")
                }
                this.display.value = String(calc)
            }catch(err){
                alert("conta invalida")
                return
            }
        },
        //buttons click and press functions details
        btnToDisplay(valor){
            this.display.value += valor;
        },
        deleteOne(){
            this.display.value  = this.display.value.slice(0, -1)
        },
        clearDisplay(){
            this.display.value = ''
        },
        keyPressEnter(){
            this.display.addEventListener('keyup' ,(e)=>{
              if(e.keyCode === 13){
                this.calculate()
              }  
            })
        }
    }
}

const calc =  createCalc()

calc.inite()