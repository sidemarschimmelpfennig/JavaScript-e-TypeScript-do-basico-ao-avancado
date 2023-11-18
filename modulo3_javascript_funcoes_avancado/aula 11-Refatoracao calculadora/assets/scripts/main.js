function Calc (){
        this.display = document.querySelector('.display')
        
        this.inite = () => {
            this.captureClick()
            this.keyPress()
            this.display.focus()
        }

        this.captureClick = () =>{
            document.addEventListener('click', event => {
                const element = event.target
                if(element.classList.contains('btn-num')) this.addNumDisplay(element) 
                if(element.classList.contains('btn-clear')) this.clear() 
                if(element.classList.contains('btn-del')) this.delete() 
                if(element.classList.contains('btn-eq')) this.calculate() 
            })
        } 
        this.addNumDisplay = (element) => {
            this.display.value += element.innerText 
            this.display.focus()
        }
        this.clear = () => this.display.value = ''
        this.delete = () => this.display.value = this.display.value.slice(0, -1)
        this.calculate = () =>{
            try{
                const calc = eval(this.display.value)
                if (calc === 0) return this.display.value = String(calc)
                if(!calc){
                    alert("conta invalida")
                }
                this.display.value = String(calc)
            }catch(e){
                alert("conta invalida")
                return
            }
        }
        this.keyPress = () => {
            this.display.addEventListener('keyup' ,(e)=>{
                if(e.keyCode === 13)this.calculate()
                if (e.key === "Delete") this.clear()
            })
        }
     
}

const calc = new Calc()

calc.inite()