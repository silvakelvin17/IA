const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: ["Alternativa1","Alternativa2"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa1","Alternativa2"]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativo = document.createElement("button");
        botaoAlternativa.textContent = alternativas.texto
        caixaAlternativas.appendChild(botaoAlternativo);
    }
}

mostraPergunta();