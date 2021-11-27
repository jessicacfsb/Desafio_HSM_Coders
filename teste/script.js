var botao = document.getElementById("botao")
var texto = document.getElementById("texto-digitado")

function inputLength() {
    return input.value.length
}

function criarCurso() {
    botao.addEventListener("click", adicionarCurso)
}

adicionarCurso(){
    if (inputLength() > 0) {
        createListElement();
    }
}