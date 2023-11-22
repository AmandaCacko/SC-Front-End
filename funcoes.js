// Aula 11 - Funções

// Definição da função
function saudacao() {
    console.log("Olá, seja bem-vindo(a) ao nosso curso de JavaScript!")
}

saudacao()

// Como enviar parametros para as funções

function saudacao(nome="Usuário", curso="JavaScript") {
    console.log(`Olá ${nome}, seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao("Amanda", "HTML & CSS")

// Retorno da função

function soma(num1, num2) {
    return num1 + num2 
}

const resultado = soma(10, 20)
console.log(resultado)

function maiorDoQue50(numero){
    if(numero > 50){
        return true
    } else {
        return false
    }
}

