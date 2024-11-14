const bc = new BroadcastChannel('game_channel');

let partidaComencada = false;

let game;

function Setup() {

    if (navigator.userAgent.includes('Chrome')) {
        document.getElementById("infoNav").textContent = "Chrome";
    } else {
        document.getElementById("infoNav").textContent = "Mozilla";
        document.body.style.backgroundColor = "#ed8742";
        document.getElementById("container").style.backgroundColor = "#c9631e";
    }

    document.getElementById("infoURL").textContent = window.location.href;
}

function getName() {
    let name = document.getElementById("username").value;

    if (name == "") {
        alert("No hi ha nom!")
    } else if (!partidaComencada) {
        document.getElementById("startGame").disabled = true;
        document.cookie = "nombre=" + name + "; path=/; expires=Thu, 31 Dec 2024 23:59:59 GMT; secure; samesite=strict";
        document.getElementById("game").textContent = "Jugador: " + name + ", Punts: 0, ESTAT PARTIDA: En joc"
        game = window.open("joc.html");
    }
}

function ereaseGame() {
    game.close();
}

bc.onmessage = (event) => {
    if (event.data.action === "updateScore") {
        document.getElementById("game").textContent = `Jugador: ${event.data.user}, Punts: ${event.data.points}, ESTAT PARTIDA: En joc`;
    }
};

Setup();