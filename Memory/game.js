const cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards];

const timeStart = new Date().getTime();


let activeCard = "";
const activePair = [];

const gamePairs = cards.length / 2
let gameResult = 0;

const clickCard = function () {
    activeCard = this;
    activeCard.classList.remove("hidden");

    if (activePair.length === 0) {
        activePair[0] = activeCard;
        return;
    }
    else {
        cards.forEach(card => card.removeEventListener("click", clickCard))
        activePair[1] = activeCard;

        setTimeout(function () {
            if (activePair[0].className === activePair[1].className) {
                activePair.forEach(card => {
                    card.classList.add('off');
                })
            }
            else {
                activePair.forEach(card => {
                    card.classList.add('hidden')
                })
            }
        }, 1000)

    };
}

const init = () => {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1);
    })

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click", clickCard)
        })
    }, 500)
}

init();