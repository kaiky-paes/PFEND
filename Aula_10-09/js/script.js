function moverAleatorio() {
    const carroAleatorio = Math.floor(Math.random() * 3) + 1;

    const carro = document.getElementById('carro${carroAleatorio')

    const mover = 50;

    let posicao = parseInt(carro.style.left) || 0;

    posicao += mover;

    carro.style.left = posicaoAtual + "px";
}