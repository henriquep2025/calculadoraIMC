const imcForm = document.getElementById ("imcForm")
const peso = document.getElementById ("peso")
const altura = document.getElementById ("altura")
const resultado = document.getElementById ("resultado")

imcForm.addEventListener('submit', function (event) {
    event.preventDefault();
    calcularIMC(peso, altura);
})

function calcularIMC(p, a){
    const conta = p/ (a*a);
    let classificacao = ""
    if (condicao){

    }else {
        
    }

    //IF e ELSE para definir as categorias do IMC
    // menor 18,5 - baixo peso
    // de 18,5 a 24,9 - normal
    // 25 a 29,9 - sobrepeso
    // 30 a 34,9 - obesidade I
    // 35 a 39,9 - obesidade II
    // 40+ - obesidade III

}