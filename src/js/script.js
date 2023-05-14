const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaImagem = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener('click', () => {
    const modoEscuro = body.classList.contains("modo-escuro")
    if (modoEscuro) {
        body.classList.remove("modo-escuro")
        imagemBotaoTrocaImagem.setAttribute("src", "./src/imagens/sun.png")
    } else {
        body.classList.add("modo-escuro");
        imagemBotaoTrocaImagem.setAttribute("src", "./src/imagens/moon.png")
    }
});


