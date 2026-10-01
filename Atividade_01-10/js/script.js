let semana = {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: []
}

let diaSelecionado = null

function dia(numeroDia) {
    switch (numeroDia) {
        case 1:
            diaSelecionado = "segunda"
            break
        case 2:
            diaSelecionado = "terca"
            break
        case 3:
            diaSelecionado = "quarta"
            break
        case 4:
            diaSelecionado = "quinta"
            break
        case 5:
            diaSelecionado = "sexta"
            break
        default:
            diaSelecionado = null
            alert("Dia inválido!")
            return
    }
    document.getElementById("titulo").innerHTML = `${diaSelecionado.toLowerCase()}-feira`

    listar()
}


function listar() {
    const container = document.getElementById("lista");
    container.innerHTML = "";

    if (!diaSelecionado) return;

    let listaAtual = semana[diaSelecionado]

    for (let i = 0; i < listaAtual.length; i++) {
        let ordem = i + 1
        container.innerHTML += `<p>${ordem} - Horário: ${listaAtual[i].horario} | Tarefa: ${listaAtual[i].tarefa} <img src=images/trash.png id="botao" onclick="excluir(${i})"></p>`
    }
}

function inserirTarefa() {
    if (!diaSelecionado) {
        alert("Erro: nenhum dia selecionado!");
        return;
    }

    let horario = prompt("Digite o horário da tarefa:")
    let tarefa = prompt("Digite a tarefa:")

    if (horario != null && tarefa != null && horario !== "" && tarefa !== "") {
        let novaTarefa = {
            horario: horario,
            tarefa: tarefa
        }

        semana[diaSelecionado].push(novaTarefa)
        listar()
    } else {
        alert("Erro: campos vazios!");
    }
}

function excluir(indice) {
    let listaAtual = semana[diaSelecionado]
    listaAtual.splice(indice, 1)

    listar()
}