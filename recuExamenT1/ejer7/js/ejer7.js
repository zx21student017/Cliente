onload = principal;

let ctx;

function principal() {

    //guardamos los colores en variables
    let r = "#FF0000";
    let v = "#00FF00";
    let a = "#0000FF";

    //preparamos el lienzo para nuestro dibujo 400x400
    let cnv = document.getElementById("myCanvas");
    ctx = cnv.getContext("2d"); //obtenemos el contexto del elemento canvas

    //creamos el primer círculo (azul)
    ctx.beginPath();//señalamos que vamos a empezar a dibujarlo
    ctx.arc(200, 200, 150, 0, 2 * Math.PI);//le damos las medidas
    ctx.fillStyle = a;//lo pintamos
    ctx.fill();

    //segundo círculo (verde)
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = v;
    ctx.fill();

    //tercer círculo (rojo)
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    ctx.fillStyle = r;
    ctx.fill();
}