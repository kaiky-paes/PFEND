function moverAleatorio() {
    const botao = document.querySelector('#botao');

    const carroAleatorio = Math.floor(Math.random() * 3) + 1;

    const carro = document.getElementById(`carro${carroAleatorio}`);

    const mover = 100;

    let posicao = parseInt(carro.style.left) || 0;

    posicao += mover;

    carro.style.left = posicao + "px";

    const chegada = 1480;


    if (posicao >= chegada) {
        alert(`O carro ${carroAleatorio} venceu a corrida!`);
        botao.disabled = true;
    }
}