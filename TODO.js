var addButton = document.getElementById("add")
var card1 = document.getElementsByClassName("card1")[0]
const first = document.getElementsByClassName("first")[0]
const create = document.getElementsByClassName("create")[0]
const flex = document.getElementsByClassName("flex-container")[0]
const card2 = document.getElementsByClassName("card2")[0]
var currentElement;


    

const Newcard = (SK) => {
    card2.style.display = "flex";
    currentElement = SK
}

const NewPage = (card) => {
    first.style.display = "none";
    create.append(card);
    create.style.display = "block";
}

const createCard = (heading) => {
    var cardElement = document.createElement("div");
    cardElement.className = "card"
    let h4 = document.createElement("h4")
    h4.innerText = heading
    h4.addEventListener("click", (SK) => {
        NewPage(SK.target.parentNode)
    })
    let hr = document.createElement("hr")
    let d = document.createElement("span")
    d.className = "delete material-icons";
    d.innerText = "delete";
    let add = document.createElement("span")
    add.className = "material-icons";
    add.innerText = "add";
    add.addEventListener("click", (SK) => {
        Newcard(SK.target.parentNode)
    })
    d.addEventListener("click", (SK) => {
        deleteCard(SK)
    })
    cardElement.append(h4);
    cardElement.append(hr);
    cardElement.append(d);
    cardElement.append(add)
    flex.append(cardElement);
    card1.style.display = "none";
}

const add1 = () => {
    let newValue = document.getElementById("input-text1").value
    let div = document.createElement("div")
    div.innerText = newValue
    let button = document.createElement("button")
    button.innerText = "Done"
    button.addEventListener("click", (SK) => {
        SK.target.style.display = "none";
        SK.target.parentNode.style.textDecoration = "line-through";
    })
    div.append(button)
    currentElement.append(div)
    card2.style.display = "none"
}


addButton.addEventListener("click", () => {
    card1.style.display = "flex";
})

const deleteCard = (SK) => {
    SK.target.parentNode.style.display = "none"
}

const add= () => {
    let inputValue = document.getElementById("input-text").value;
    createCard(inputValue)
  
}   