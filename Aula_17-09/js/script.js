let frutas = ["uva","maçã","pêra","banana"]
console.log(frutas)
console.log(frutas[2])
frutas.push("café")
let tamanho = frutas.length
console.log("Tamanho: " + tamanho)
console.log(frutas)
console.log(frutas.sort())
console.log(frutas.reverse())
//pega o index do elemento(busca)
const index = frutas.indexOf('banana');
console.log(index)
//pega o elemento pelo indice
console.log(frutas.at(2))
//converte para uma string
console.log(frutas.toString())
//substitui a virgula pelo valor do parâmetro
console.log(frutas.join("***"))
novo = frutas.concat(frutas)
console.log(novo)

console.log(novo)
//No índice 2, remova 2 itens
console.log(frutas.splice(2,2));
frutas.splice(2, 1, "Lemon", "Kiwi");
console.log(frutas)

let primeiraFruta = frutas.shift();
console.log(primeiraFruta)
//retira o ultimo elemento e mostra
console.log(frutas.pop())

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i] + " posicao " + i)
}

frutas.forEach((f, index) => {
    console.log(f + " posicao " + index)
});