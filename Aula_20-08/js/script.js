let acertos = 0

function correta() {
    alert("Respota correta.")
}

function errada() {
    alert("Respota errada.")
}

function question(idQuestion) {
    switch (idQuestion) {
        case 1:
            acertos++
            sessionStorage.setItem('varAcertos', acertos)
            correta()
            window.location.href = "html/quiz2.html"
            break
        default:
            errada()
            window.location.href = "html/quiz2.html"
            break
    }
}

function question2(idQuestion) {
    switch (idQuestion) {
        case 1:
            acertos++
            sessionStorage.setItem('varAcertos', acertos)
            correta()
            window.location.href = "quiz3.html"
            break
        default:
            errada()
            window.location.href = "quiz3.html"
            break
    }
}

function question3(idQuestion) {
    switch (idQuestion) {
        case 1:
            acertos++
            sessionStorage.setItem('varAcertos', acertos)
            correta()
            window.location.href = "quiz4.html"
            break
        default:
            errada()
            window.location.href = "quiz4.html"
            break
    }
}

function question4(idQuestion) {
    switch (idQuestion) {
        case 1:
            acertos++
            sessionStorage.setItem('varAcertos', acertos)
            correta()
            window.location.href = "quiz5.html"
            break
        default:
            errada()
            window.location.href = "quiz5.html"
            break
    }
}

function question5(idQuestion) {
    switch (idQuestion) {
        case 1:
            acertos++
            sessionStorage.setItem('varAcertos', acertos)
            correta()
            window.location.href = "resultado.html"
            break
        default:
            errada()
            window.location.href = "resultado.html"
            break
    }
}

document.getElementById("a").innerText = `${acertos}`