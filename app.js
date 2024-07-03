let listaNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagensNaTela();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female'), {rate:1.2};
}

function mensagensNaTela() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 0 e 100');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('h1', 'Acertou');
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else 
            if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        } else 
            exibirTextoNaTela('p','O número secreto é maior');
        tentativas++ 
        limparInput();
}

function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() { 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qntElementosNaLista = listaNumeros.length;
    if (qntElementosNaLista == numeroLimite){
        listaNumeros = [];
    }
    if (listaNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    tentativas = 1;
    mensagensNaTela();
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}