onload = principal;

function principal() {

    let filas = 8;
    let columnas = 8;
    let n = "black";
    let b = "white";
    let x = 0;
    let y = 0;
    let negro = true;

    //400x400
    let cnv = document.getElementById("myCanvas");
    let ctx = cnv.getContext("2d"); //obtenemos el contexto del elemento canvas

    ctx.fillStyle = b;
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            ctx.fillRect(x, y, 50, 50);
            x += 50;
            if (negro) {
                ctx.fillStyle = n;
                negro = false;
            } else {
                ctx.fillStyle = b;
                negro = true;
            }
        }
        y += 50;
        x = 0;
        if (negro) {
            ctx.fillStyle = n;
            negro = false;
        } else {
            ctx.fillStyle = b;
            negro = true;
        }
        
        //blanco = (blanco)?false:true; --operador ternario es lo mismo pero resumido.--

        /*
            function escribirTexto(){
            var c = document.getElementById("myCanvas");
            ctx = c.getContext("2d");
            ctx.font = "30px Arial";
            ctx.fillText("Hello World", 10, 50);
        */
    }

}