/*var parametro = prompt('Digite um número')

switch (parseInt(parametro)) {

    case 1:
        document.write('Parametro 1')
        break

    case 2:
        document.write('Parametro 2')
        break

    default:
        document.write('Default')
}*/



/*var valor = prompt('Digite o valor da compra:');
var total;

var option = prompt(`Valor: ${valor}. Escolha a forma de pagamento:                              [1] PIX (5% off) | [2] Débito | [3] Crédito | [4] Crediário`)

switch (parseInt(option)) {
    case 1:
        total = valor * 0.95;
        document.write(`Forma de pagamento selecionada: PIX.<br>Valor total: R$ ${total.toFixed(2)}`)
        break;

    case 2:
        total = valor;
        document.write(`Forma de pagamento selecionada: débito.<br>Valor total: R$ ${total.toFixed(2)}`)
        break;

    case 3:
        var parcelas = prompt('Selecione a quantidade de parcelas (até 10x sem juros).')
        if (parcelas >= 1 && parcelas <= 10) {
            total = valor;
            var parcela;
            parcela = total / parcelas;
            document.write(`Quantidade de parcelas: ${parcelas}.<br>Valor de cada parcela: R$ ${parcela.toFixed(2)}.<br>Valor total: R$ ${total.toFixed(2)}`)
        } else {
            alert('Opção inválida!')
        }
        break;

    case 4:
        var parcelas = prompt('Selecione a quantidade de parcelas. (1 a 3 - 3% juros | 4 a 6 - 5% juros | 7 a 10 - 7% juros)')
        if (parcelas >= 1 && parcelas <= 3) {
            total = valor * 1.03;
            var parcela;
            parcela = total / parcelas;
            document.write(`Quantidade de parcelas: ${parcelas}. Valor de cada parcela: R$ ${parcela.toFixed(2)}.<br>Valor total: R$ ${total.toFixed(2)}`)
        } else if (parcelas <= 6) {
            total = valor * 1.05;
            var parcela;
            parcela = total / parcelas;
            document.write(`Quantidade de parcelas: ${parcelas}.<br>Valor de cada parcela: R$ ${parcela.toFixed(2)}.<br>Valor total: R$ ${total.toFixed(2)}`)
        } else if (parcelas >= 7 && parcelas >= 10) {
            total = valor * 1.07;
            var parcela;
            parcela = total / parcelas;
            document.write(`Quantidade de parcelas: ${parcelas}.<br>Valor de cada parcela: R$ ${parcela.toFixed(2)}.<br>Valor total: R$ ${total.toFixed(2)}`)
        }
        break;

    default:
        alert('Opção inválida.')
        break;
}*/



var choice;
var valor = parseFloat;
var option = 0;
var doacoes = 0;
var total = 0;

do {
    alert('[1] - Para doar R$ 10,00\n[2] - Para doar R$ 20,00\n[3] - Para doar R$ 30,00\n[4] - Para doar R$ 50,00\n[5] - Para doar outros valores.');
    option = prompt('Escolha:');
    switch (parseInt(option)) {
        case 1:
            valor = 10;
            alert(`Doação no valor de R$ ${valor},00`);
            break;

        case 2:
            valor = 20;
            alert(`Doação no valor de R$ ${valor},00`);
            break;

        case 3:
            valor = 30;
            alert(`Doação no valor de R$ ${valor},00`);
            break;

        case 4:
            valor = 50;
            alert(`Doação no valor de R$ ${valor},00`);
            break;

        case 5:
            valor = parseFloat(prompt('Digite o valor da doação:'));
            alert(`Doação no valor de R$ ${valor},00`);
            break;

        default:
            alert('Opção inválida.');
            break;
    }
    doacoes = doacoes + 1;
    total = total + valor;
    choice = prompt(`Quantidade de doações: ${doacoes}.
Valor total: R$ ${total}.

Fazer outra doação?
[1] -  Sim | [0] - Não`);
} while (choice != 0);