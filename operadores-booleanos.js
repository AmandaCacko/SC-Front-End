// Aula 4 - Operadorees Booleanos

const numero = 10; // Atribuir

console.log(numero == 10) // Comparar
console.log(numero > 20) 

console.log(numero == 10)
console.log(10 == "10") // True
console.log(10 === "10") // False 

console.clear()

console.log (10 != 10) // False
console.log (10 != '10') // False
console.log (10 !== '10') // True

let idade = 26;
let tenhoCNH = true;

const possoDirigir = (idade >= 18 && tenhoCNH === true)
console.log("Posso dirigir?", possoDirigir)


idade = 40
const votoFacultativo = idade < 18 || idade >= 70

const estouGostandoDoCurso = false
console.log(estouGostandoDoCurso)
console.log(!estouGostandoDoCurso)