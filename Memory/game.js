const cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards];


const clickCard = () => {
    console.log("klik");
}
const init = () => {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1);
    })

    setTimeout(function () {
        cards.forEach(function (card) {
            card.classList.add("hidden")
            card.addEventListener("click", clickCard)
        })
    }, 1000)
}

init();