var enterbutton = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li")

//Em caso de não inserção de dados
function inputlength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement("li")

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''

    //Botão de Deletar
    var botaoDeletar = document.createElement("button")
    botaoDeletar.appendChild(document.createTextNode("x"))
    li.appendChild(botaoDeletar)
    botaoDeletar.addEventListener("click", deleteListItem)

    //Deletar Elementos
    function deleteListItem() {
        li.classList.add("delete")
    }
}


enterbutton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)