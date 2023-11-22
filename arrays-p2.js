// Aula 10 - Arrays (Métodos de arrays)

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [] 
// Fatiamento: slice
    console.log(arr1.slice(0,3))
    console.log(arr1.slice(2))

// Adicionando elementos: push | unshift
    console.log("Antes de adicionar: " + arr2)
    arr2.push(10, 20, 30)
    console.log("Depois de adicionar: " + arr2)

    console.log("Antes de adicionar com unshift: " + arr2)
    arr2.unshift(10, 20, 30)
    console.log("Depois de adicionar com unshift: " + arr2)

// Removendo elementos: pop |  shift
    console.log("Antes de remover com o pop: " + arr2)
    const elementoRemovido = arr2.pop()
    console.log("Depois de remover com  o pop: " + arr2)

    console.log("Antes de remover com unshift: " + arr2)
    arr2.shift()
    console.log("Depois de remover com unshift: " + arr2)

// Concatenando arrays: concat
    console.log("arr1",  arr1)
    console.log("arr2",  arr2)

    console.log(arr1.concat(arr2))
    console.log(arr2.concat(arr1))

// Buscando elementos: indexOf | LastIndexOf

    console.log(arr1)
    let indiceDosElementos = arr1.indexOf(3)
    console.log(indiceDosElementos)

    let arr3 = [1, 2, 3, 4, 5]

    console.log(arr3.lastIndexOf(3))

// Descobrindo a existência de um elemento: includes

    console.log(arr1)
    console.log(arr1.includes(7))

// Invertendo arrays: reverse

    console.log("Arr1 normal: " + arr1)
    const arr1Invertido = arr1.reverse()
    console.log("Arr1 invertido: " + arr1Invertido)