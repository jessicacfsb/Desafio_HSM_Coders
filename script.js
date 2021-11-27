var enterButton = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li")

//Em caso de não inserção de dados
function inputLength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement("li")

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''

    //Botão de Deletar
    var dBtn = document.createElement("button")
    dBtn.appendChild(document.createTextNode("x"))
    li.appendChild(dBtn)
    dBtn.addEventListener("click", deleteListItem)

    //Deletar Elementos
    function deleteListItem() {
        li.classList.remove("delete")
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}