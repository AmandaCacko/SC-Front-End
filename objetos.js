// Aula 12 - Objetos

// Como criar um objeto no JS?

let pessoa = {
    nome: "Amanda",
    idade: 20,
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])

// Como adicionar um par chave-valor

    pessoa.altura = 1.67
    console.log(pessoa)

// Como remover um par chave-valor
    delete pessoa.altura
    console.log(pessoa)

// Como percorrer?
    for (let chave in pessoa) {
        console.log(chave)
    }


