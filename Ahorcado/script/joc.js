const inputObj = document.getElementById("secretWord");
let lletres;

let paraula;

let contador = 0;

let encertades = [];

function getWord() {
    paraula = (inputObj.value).toUpperCase();
    if (isNaN(paraula)) {
        if (paraula.length < 4 || paraula.length > 16) {
            alert("La paraula ha de ser minim de 4 lletres i maxim de 16");
        } else {
            if (inputObj.type === "text") {
                alert("Es veu la paraula!")
            } else {
                lletres = paraula.split("");
                console.log(lletres);
                createEncertades();
                inputObj.value = "";
            }
            displayLives();
        }
    } else {
        alert("No hi ha paraula");
    }
}

function displayLives() {
    let livesStr = "Vides: "
    for (let i = 0; i < (10 - contador); i++) {
        livesStr += "♥";
    }
    document.getElementById("vides").innerHTML = livesStr;
}

function displayWord() {
    let displayedWord = "";
    for (let i = 0; i < lletres.length; i++) {
        displayedWord += encertades[i];
        displayedWord += " "
    }
    document.getElementById("wordToGuess").innerHTML = displayedWord;
}

function createEncertades() {
    for (let i = 0; i < lletres.length; i++) {
        encertades.push("_");
    }
    displayWord();
}

function seeWord() {
    if (inputObj.type === "text") {
        inputObj.type = "password";
    } else if (inputObj.type === "password") {
        inputObj.type = "text";
    }
}

function playLetter(obj) {
    let lletra = obj.textContent;

    if (lletres.includes(lletra)) {
        while (lletres.includes(lletra)) {
            encertades[lletres.indexOf(lletra)] = lletra;
            lletres[lletres.indexOf(lletra)] = "";
        }
        obj.style.color = "green";
        obj.style.borderColor = "green";
        displayWord();
        if (!encertades.includes("_")) {
            document.getElementById("win").showModal();
        }
    } else {
        let anim = "cae" + contador + " 3s forwards";
        document.getElementById("image").style.animation = anim;
        obj.style.color = "red";
        obj.style.borderColor = "red";
        if (contador === 9) {
            document.getElementById("lose").showModal();
        }
        contador++;
    }
    disableLetter(obj);
    displayLives();
}

function disableLetter(obj) {
    obj.disabled = true;
}

function hideDialogLose() {
    document.getElementById("lose").close();
}

function hideDialogWin() {
    document.getElementById("win").close();
}