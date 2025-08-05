let clicado = false;

document.getElementById("meuBotao").addEventListener("click", function() {
    const mensagem = document.getElementById("mensagem");

    if (!clicado) {
        mensagem.textContent = "Parabéns, você apertou o botão pela primeira vez!";
        clicado = true;
    } else {
        mensagem.textContent = "Você já clicou no botão!";
    }
});
