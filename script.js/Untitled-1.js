/* ==========================================================================
   AGRINHO 2026 - MATA CILIAR
   Arquivo JavaScript de Interatividade
   ========================================================================== */

// -------------------------------------------------------------------------
// 1. ANIMAÇÃO DE ROLAGEM (SCROLL REVEAL)
// -------------------------------------------------------------------------
// Selecionamos todas as seções e os cards de benefícios da página
const elementosParaAnimar = document.querySelectorAll('section, .card');

// Primeiro, adicionamos a classe 'oculto' a todos eles para escondê-los
elementosParaAnimar.forEach(elemento => {
    elemento.classList.add('oculto');
});

// Função que verifica a posição do elemento na tela
function animarAoRolar() {
    const alturaJanela = window.innerHeight;

    elementosParaAnimar.forEach(elemento => {
        // Pega a distância do topo do elemento em relação ao topo da tela
        const posicaoElemento = elemento.getBoundingClientRect().top;

        // Se o elemento estiver visível na tela (com uma folga de 100px), ele aparece
        if (posicaoElemento < alturaJanela - 100) {
            elemento.classList.add('revelado');
        }
    });
}

// Escutamos o evento de rolagem (scroll) do mouse
window.addEventListener('scroll', animarAoRolar);

// Executamos a função uma vez logo que a página carrega para mostrar o que já está no topo
animarAoRolar();


// -------------------------------------------------------------------------
// 2. GERADOR DE CURIOSIDADES SUSTENTÁVEIS
// -------------------------------------------------------------------------
// Lista de fatos sobre a Mata Ciliar
const curiosidades = [
    "💧 Você sabia? A mata ciliar funciona como uma esponja gigante, absorvendo a água da chuva e abastecendo os lençóis freáticos aos poucos.",
    "🐟 Sem a sombra das árvores ciliares, a temperatura da água do rio sobe, o que diminui o oxigênio e pode causar a morte de várias espécies de peixes.",
    "📏 Pela lei brasileira, um rio com até 10 metros de largura precisa ter, no mínimo, 30 metros de mata ciliar em cada margem!",
    "🛡️ As raízes profundas dessas árvores 'amarram' a terra das margens, impedindo que os barrancos desmoronem para dentro do rio (erosão).",
    "🦜 Além de proteger a água, essa mata é um corredor ecológico, permitindo que aves e mamíferos viagem de uma floresta a outra com segurança."
];

// Selecionamos o botão e o parágrafo onde o texto vai aparecer
const botaoCuriosidade = document.getElementById('btn-curiosidade');
const textoCuriosidade = document.getElementById('texto-curiosidade');

// Quando o botão for clicado, executamos uma função
botaoCuriosidade.addEventListener('click', () => {
    // Sorteia um número aleatório baseado na quantidade de curiosidades
    const indiceSorteado = Math.floor(Math.random() * curiosidades.length);
    
    // Altera o texto do parágrafo no HTML para a curiosidade sorteada
    textoCuriosidade.innerText = curiosidades[indiceSorteado];
    
    // Pequeno efeito visual: faz o texto piscar rapidamente para indicar que mudou
    textoCuriosidade.style.opacity = 0;
    setTimeout(() => {
        textoCuriosidade.style.opacity = 1;
        textoCuriosidade.style.transition = "opacity 0.5s ease";
    }, 100);
});