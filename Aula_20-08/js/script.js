let acertos = Number(sessionStorage.getItem('qtdAcertos')) || 0;
let pagina = 0;

function correta() {
    alert("Resposta correta.")
}

function errada() {
    alert("Resposta errada.")
}

function proxPagina(numPagina) {
    switch (numPagina) {
        case 1:
            window.location.href = "html/quiz2.html"
            break
        case 2:
            window.location.href = "quiz3.html"
            break
        case 3:
            window.location.href = "quiz4.html"
            break
        case 4:
            window.location.href = "quiz5.html"
            break
        case 5:
            window.location.href = "resultado.html"
            break
    }
}

function responder(event, proximaPagina) {
}

function question(proxima) {
    event.preventDefault();
    const respSelecionada = document.querySelector('input[name="resposta"]:checked');
    let valor = Number(respSelecionada.value);

    if (valor === 1) {
        acertos++
        sessionStorage.setItem('qtdAcertos', acertos)
        correta()
    } else {
        errada()
    }
    pagina++
    proxPagina(1)
}

function question2(proxima) {
    event.preventDefault();
    const respSelecionada = document.querySelector('input[name="resposta"]:checked');
    let valor = Number(respSelecionada.value);

    if (valor === 1) {
        acertos++
        sessionStorage.setItem('qtdAcertos', acertos)
        correta()
    } else {
        errada()
    }
    pagina++
    proxPagina(2)
}

function question3(proxima) {
    event.preventDefault();
    const respSelecionada = document.querySelector('input[name="resposta"]:checked');
    let valor = Number(respSelecionada.value);

    if (valor === 1) {
        acertos++
        sessionStorage.setItem('qtdAcertos', acertos)
        correta()
    } else {
        errada()
    }
    pagina++
    proxPagina(3)
}

function question4(proxima) {
    event.preventDefault();
    const respSelecionada = document.querySelector('input[name="resposta"]:checked');
    let valor = Number(respSelecionada.value);

    if (valor === 1) {
        acertos++
        sessionStorage.setItem('qtdAcertos', acertos)
        correta()
    } else {
        errada()
    }
    pagina++
    proxPagina(4)
}

function question5(proxima) {
    event.preventDefault();
    const respSelecionada = document.querySelector('input[name="resposta"]:checked');
    let valor = Number(respSelecionada.value);

    if (valor === 1) {
        acertos++
        sessionStorage.setItem('qtdAcertos', acertos)
        correta()
    } else {
        errada()
    }
    proxPagina(5)
}

const totalAcertos = document.getElementById('total')
if (totalAcertos) {
    totalAcertos.innerText = acertos;
}