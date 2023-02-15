onload = principal;

///creamos variables
let turno = true;

///creamos un array con todas las posiciones del tablero
celdas = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function principal() {
    dibujaTablero();
}

function dibujaTablero() {
    let tablero = document.getElementById("tableroId");

    for (let i = 0; i < 9; i++) {
        let casilla = document.createElement("div");
        casilla.class = "casilla";

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagen/blanco.png");
        imagen.setAttribute("onclick", "pinchado(this," + i + ")");

        casilla.appendChild(imagen);
        tablero.appendChild(casilla);
    }
}

function pinchado(imagen, posicion) {

    console.log(posicion);

    ///vamos eligiendo el jugador y según jugador elegimos 'X' o 'O'
    if (celdas[posicion] == 0) {
        if (turno) {
            imagen.setAttribute("src", "imagen/x.png");
            turno = false;
            celdas[posicion] = 1;
            gananX();
        } else {
            imagen.setAttribute("src", "imagen/o.png");
            turno = true;
            celdas[posicion] = 2;
            gananO();
        }
    } else {
        console.log("Celda ocupada");
    }

}
///posibles casos en el juego 
///Ganan las 'X'
function gananX() {
    if (celdas[0] == celdas[1] && celdas[0] == celdas[2] && celdas[1] == celdas[2] && celdas[0] == 1 ||
        celdas[3] == celdas[4] && celdas[3] == celdas[5] && celdas[4] == celdas[5] && celdas[3] == 1 ||
        celdas[6] == celdas[7] && celdas[6] == celdas[8] && celdas[7] == celdas[8] && celdas[6] == 1 ||
        celdas[0] == celdas[3] && celdas[0] == celdas[6] && celdas[3] == celdas[6] && celdas[0] == 1 ||
        celdas[1] == celdas[4] && celdas[1] == celdas[7] && celdas[7] == celdas[4] && celdas[1] == 1 ||
        celdas[2] == celdas[5] && celdas[2] == celdas[8] && celdas[5] == celdas[8] && celdas[2] == 1 ||
        celdas[0] == celdas[4] && celdas[0] == celdas[8] && celdas[4] == celdas[8] && celdas[0] == 1 ||
        celdas[2] == celdas[4] && celdas[2] == celdas[6] && celdas[4] == celdas[6] && celdas[2] == 1) {

        console.log("Ganan las Rayas");
        alert("ganan las rayas");

        resetearTablero();

    }

}

///Ganan los 'O'
function gananO() {
    if (celdas[0] == celdas[1] && celdas[0] == celdas[2] && celdas[1] == celdas[2] && celdas[0] == 2 ||
        celdas[3] == celdas[4] && celdas[3] == celdas[5] && celdas[4] == celdas[5] && celdas[3] == 2 ||
        celdas[6] == celdas[7] && celdas[6] == celdas[8] && celdas[7] == celdas[8] && celdas[6] == 2 ||
        celdas[0] == celdas[3] && celdas[0] == celdas[6] && celdas[3] == celdas[6] && celdas[0] == 2 ||
        celdas[1] == celdas[4] && celdas[1] == celdas[7] && celdas[7] == celdas[4] && celdas[1] == 2 ||
        celdas[2] == celdas[5] && celdas[2] == celdas[8] && celdas[5] == celdas[8] && celdas[2] == 2 ||
        celdas[0] == celdas[4] && celdas[0] == celdas[8] && celdas[4] == celdas[8] && celdas[0] == 2 ||
        celdas[2] == celdas[4] && celdas[2] == celdas[6] && celdas[4] == celdas[6] && celdas[2] == 2) {

        console.log("Ganan los Círculos");
        alert("ganan los círculos");

        resetearTablero();
    }

}

function resetearTablero() {
    tablero.getElementById("tableroId").innerHTML = "";

    for (let i = 0; i < 9; i++) {
        let casilla = document.createElement("div");
        casilla.class = "casilla";

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagen/blanco.png");
        imagen.setAttribute("onclick", "pinchado(this," + i + ")");

        casilla.appendChild(imagen);
        tablero.appendChild(casilla);
    }
}