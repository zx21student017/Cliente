$(principal);
let tablero;

function principal() {
     tablero = $("#tablero");

     let letras = "qwerty";

     for (let i = 0; i < letras.length; i++) {
          tablero.append(
               "<span id='arrastrable" + i + "' draggable='true' ondragend='soltar(event)'>" + letras[i] + "</span>"
          );
     }
}

function soltar(event) {
     tablero.append($("#" + event.target.id));
}

function comprobar() {
     let letsTab = $("#tablero").text();
     console.log(letsTab);
     if (letsTab != letsTab.split('').sort().join('')) {
        alert("Maaal");
     }else{
        alert("Correcto");
     }
}