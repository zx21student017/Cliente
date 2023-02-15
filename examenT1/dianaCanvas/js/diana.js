onload = principal;

let ctx;

function principal() {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d")
    booleanRojo = false

    for (let x = 200; x > 0; x -= 25) {//creamos una variable 'x' que es 200, mientras x sea más pequeña que 0 se le van restando 25

        if (booleanRojo) {
            ctx.fillStyle = 'white';
            booleanRojo=false;
        } else{
            ctx.fillStyle = 'red';
            booleanRojo=true;
        }
            ctx.beginPath();
            ctx.arc(200,200, x, 0, 2 * Math.PI);
            ctx.fill();
    }
}