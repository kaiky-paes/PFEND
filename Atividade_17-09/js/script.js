let tarefas = []

function listar() {
    document.getElementById("lista").innerHTML = " "
    for (let i = 0; i < tarefas.length; i++) {
        let ordem = i + 1
        document.getElementById("lista").innerHTML += "<p>" + ordem + " - Tarefa: " + tarefas[i] + "</p>"
    }
}

function inserirTarefa() {
    let tarefa = prompt("Digite a tarefa:")
    tarefas.push(tarefa)
    listar()
}

function excluirTarefa() {
    tarefaExcluir = prompt("Digite a tarefa a ser excluída:")
    let x = tarefas.indexOf(tarefaExcluir)
    tarefas.splice(x, 1)
    listar()
}

function excluirTarefaID() {
    numero = prompt("Digite o número da tarefa a ser excluida")
    let x = numero - 1
    tarefas.splice(x, 1)
    listar()
}

function excluirTarefas() {
    tarefas = []
    listar()
}

function alterarTarefa() {
    numero = prompt("Digite o número da tarefa a ser alterada:")
    let x = numero - 1
    novo = prompt("Tarefa: " + tarefas[x] + " Reescreva-a:")
    tarefas[x] = novo
    listar()
}

console.log(tarefas)