// Aula 9 - Arrays

// Como criar um array?

let arr = ["Amanda", 20, 1.65, true]
console.log(arr)

// Como acessar os elementos da array
console.log("Primeiro elemento: ", arr[0])
console.log("Segundo elemento: ", arr[1])
console.log("Terceiro elemento: ", arr[2])
console.log("Quarto elemento: ", arr[3])

// Como obter o tamanho do array

console.log("Tamanho do array: ", arr.length)

// Percorrendo array

for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

for(let elemento of arr) {
    console.log(elemento)
}

for(let indice in arr){
    console.log(indice)
}