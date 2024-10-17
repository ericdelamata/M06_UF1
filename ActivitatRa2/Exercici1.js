document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var x = parseInt(document.getElementById("numEx").value);
        document.getElementById("numEx").value = "";
        recullNum(x);
    }
});

function recullNum(x) {
    if (x === 1) {
        exercici1();
    } else if (x === 2) {
        exercici2();
    } else if (x === 3) {
        exercici3();
    }
}

//Exercici1
function exercici1() {
    let x = Number(prompt("Introdueix el que vulguis"));

    let text = ";"

    text = isNaN(x) ? "No es un numero" : "Es un numero";
    console.log(text);

}
//Exercici2
function exercici2() {
    let x = Number(prompt("Introdueix el que vulguis"));

    if (x - Math.floor(x) > 0) {
        console.log("Es un decimal");
    } else if (x - Math.floor(x) === 0) {
        console.log("Es un enter");
    } else {
        console.log("No es un numero");
    }
}
//Exercici3
function exercici3() {
    let mesur = prompt("Que vols convertir ('C' o 'F')?");
    if (mesur === 'C') {
        var temp = Number(prompt("Quin valor té la temperatura en Celsius?"));
        console.log((9.0 / 5.0) * temp + 32);
    } else if (mesur === 'F') {
        var temp = Number(prompt("Quin valor té la temperatura en Farenheit?"));
        console.log((temp - 32) / (9.0 / 5.0));
    } else {
        console.log("No has introduit ve el valor");
    }
}
//Exercici4
function exercici4() {
    let mins = int(prompt("Quants minuts ha durat la trucada?"));
    let sec = int(prompt("Amb quants segons?"));
    var segonstotals = (mins * 60) + sec;

}