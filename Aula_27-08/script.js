let frutas = []
frutas.push("kiwi")
console.log(frutas)
frutas.push("banana")
frutas.sort()
frutas.pop() //retira o último elemento
frutas.shift()
frutas.unshift('inaja', 'manga')
let y = frutas.indexOf('manga')
//No índice 2, remova 2 itens
frutas.splice(1, 1)
/*
for(x=0; x<frutas.lenght; x++) {
document.write
}*/