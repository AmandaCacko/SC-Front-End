// Aula 5 - Coerção (Conversão) de Tipos

// 1 - Coerção Explícita (Manual)

const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123123123'))
console.log(parseFloat('23123.42313'))
console.log(parseInt('23123.42313'))
console.log(Boolean('1'))

console.clear()

// 2 - Coerção Implícita (Automática)

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')
console.log(10 / '1')

console.log(10 - 'ads')


// Outros exemplos

let n = 1 + "1"
n = n - 1 
console.log(n) // Saída 10

console.log(2 + 3 + 4 + "5") // Saída 95

console.log("5" + 2 + 3 + 4) // Saída 5234

console.log("10" - "4" - "3" - 2 + "5") // Saída 15