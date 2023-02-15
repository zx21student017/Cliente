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

     let letras = $("#tablero").text();
     if (letras != letras.split('').sort().join('')) {
          $('#tablero span').css('color', 'red');
          setTimeout(_ => $('#tablero span').css('color', 'black'), 700);
          return
     }
     $('#tablero span').css('color', 'green');
     setTimeout(_ => $('#tablero span').css('color', 'black'), 700);
}