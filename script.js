const imcForm = document.getElementById ("imcForm")
const peso = document.getElementById ("peso")
const altura = document.getElementById ("altura")
const resultado = document.getElementById ("resultado")

imcForm.addEventListener('submit', function (event) {
    event.preventDefault();
    calcularIMC(peso.value, altura.value);
})


function calcularIMC(p, a){
    const imc = p/ (a*a);
    const conta = imc.toFixed(2);
    let classificacao = ""
    if (conta<18.5){
        classificacao = "Abaixo do Peso"
    }else if (conta <= 24.9){
        classificacao = "Normal"
    } else if (conta <= 29.9){
        classificacao = "Sobrepeso"
    } else if (conta <= 34.9){
        classificacao = "Obesidade I"
    } else if (conta <= 39.9){
        classificacao = "Obesidade II"
    } else {
        classificacao = "Obesidade III"
    };

    console.log(`Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta}, seu nível é ${classificacao}`)
    resultado.textContent = `Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta}, seu nível é ${classificacao}`

    //IF e ELSE para definir as categorias do IMC
    // menor 18,5 - baixo peso (conta<18,5)
    // de 18,5 a 24,9 - normal ()
    // 25 a 29,9 - sobrepeso ()
    // 30 a 34,9 - obesidade I ()
    // 35 a 39,9 - obesidade II ()
    // 40+ - obesidade III ()

}