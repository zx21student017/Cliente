onload = principal;

let ancho;
let alto;

let rctngl;
let mcnv;

function principal() {
    ancho = document.getElementById('ancho');
    alto = document.getElementById('alto');
    micanvas = document.getElementById('micanvas');

    rctngl = new Rectangulo(alto.value, ancho.value);
    dbjCanvas.dibujaRect(micanvas, rctngl);
}

//asocia onchange de inputs
function dibuja() {
    //actualizamos los valores de altura y anchura del cuadrado cada vez que lo cambiamos
    rctngl.alto = alto.value;
    rctngl.ancho = ancho.value;
    dbjCanvas.dibujaRect(micanvas, rctngl);
}

function borrar() {
    rctngl.alto = alto.value;
    rctngl.ancho = ancho.value;
    dbjCanvas.borraRect(micanvas, rctngl);
}