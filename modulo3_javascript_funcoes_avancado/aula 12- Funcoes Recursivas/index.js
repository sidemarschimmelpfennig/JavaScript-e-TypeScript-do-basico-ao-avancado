function  recursiva (max){
    //funçao que se chama de volta a unica coisa que voce deve se procupar e quando ela deve parar
    //aproximadamente 1000 recursividades no máximo 
    console.log(max)
    if (max >= 10)return
    max++ 
    recursiva(max)
}

recursiva(0)