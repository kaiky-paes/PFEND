/*var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados.')

function calcularAreaTerreno(largura, comprimento) {
    //lógica
    var area = largura * comprimento

    return area.toFixed(2)
}*/

/*var nome = prompt('Digite o nome')

var exibir = function (nome) {
    document.write("Olá " + nome + ", tudo bem!")
}

exibir(nome)*/

/*function saudacao(nome) {
    console.log('Olá, ' + nome);
}

function processarUsuario(callback) {
    const nome = "Ana";
    callback(nome); // Executa a função passada como 
}

processarUsuario(saudacao);
//Saída após o entedimento básico: "Olá, Ana"*/

/*function exibirArtigo(id, callbackSucesso, callbackErro) {
    //lógica: recuperar o id via requisição HTTP
    if(true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muitas utilizadas...')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr> />')
    document.write('<p>' + descricao + '</p>')
}

var callbackErro = function(erro) {
    document.write('<p><b>Erro:</b>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)*/

//propriedade length
document.write('Jorge Sant Ana'.length)

//retorna o caractere que pertence a este indice
document.write('Jorge Sant Ana'.charAt(7))

var nome = 'Jorge Sant Ana'
document.write(nome.indexOf('g'))

document.write(nome.replace('Sant Ana', 'Silva'))

document.write(nome.substr(6,4))

document.write(nome.toLocaleLowerCase())
document.write(nome.toLocaleUpperCase())

document.write('-' + nome.trim() + '-')