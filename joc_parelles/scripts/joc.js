//Això funciona al Mozzilla i no al Chrome
const bc = new BroadcastChannel('game_channel');


//Això funciona al Mozzilla i no al Chrome
let user = getCookie("nombre");

let points = 0;

let guess = [];

let inst;

let cont = 0;

const cards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function setLetters() {
    let buttons = document.getElementsByClassName("back");

    shuffle(cards);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = cards[i];
    }
}

function openInstructions() {
    inst = window.open("../instruccions.html", "Instruccions", "width=400,height=400");
}


function setScore() {
    document.getElementById("high-score").textContent = "JUGADOR: " + user + " - PUNTS: " + points + " punts";
    bc.postMessage({ action: "updateScore", user: user, points: points });
    document.getElementById("current-score").textContent = "Punts: " + points;
}

function playCard(element) {
    if (guess.length < 2) {
        guess.push(element);
        element.classList.toggle("flipped");
        element.style.pointerEvents = "none";
    }
    if (guess.length == 2) {
        if (!(guess[0].textContent == guess[1].textContent)) {
            setTimeout(clearWrong, 600);
            points -= 3;

            setScore();
        } else {
            cont++;
            guess = [];
            points += 10;

            setScore();
        }
    }
}


function clearWrong() {
    for (let i = 0; i < guess.length; i++) {
        guess[i].classList.toggle("flipped");
        guess[i].style.pointerEvents = "auto";
    }
    guess = [];
}


//funcio per agafar les cookies
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

if (cont === 20) {

}


setLetters();
document.getElementById("player").textContent = user;
setScore();