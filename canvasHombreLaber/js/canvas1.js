onload=principal;

let ctx;

function principal(){
	//LABERINTO//
	let canvas = document.getElementById("myCanvas");

	ctx = canvas.getContext("2d");
	console.log(canvas.width);
	console.log(canvas.height);

	//borde
	ctx.beginPath()
	ctx.lineWidth = 4;
	ctx.fillStyle = "#000000";
	ctx.moveTo(0,0);
    ctx.lineTo(250,0);

	ctx.moveTo(250,0);
    ctx.lineTo(250,100);

	ctx.moveTo(250,150);
    ctx.lineTo(250,250);

	ctx.moveTo(0,250);
    ctx.lineTo(0,50);

	ctx.moveTo(0,250);
    ctx.lineTo(250,250);

	//laberinto
	ctx.moveTo(50,0);
    ctx.lineTo(50,50);

	ctx.moveTo(0,100);
    ctx.lineTo(100,100);

	ctx.moveTo(100,50);
    ctx.lineTo(100,100);

	ctx.moveTo(100,50);
    ctx.lineTo(150,50);

	ctx.moveTo(250,150);
    ctx.lineTo(200,150);

	ctx.moveTo(200,150);
    ctx.lineTo(200,200);

	ctx.moveTo(200,200);
    ctx.lineTo(100,200);

	ctx.moveTo(250,100);
    ctx.lineTo(150,100);

	ctx.moveTo(200,100);
    ctx.lineTo(200,50);

	ctx.moveTo(150,100);
    ctx.lineTo(150,150);

	ctx.moveTo(150,150);
    ctx.lineTo(50,150);

	ctx.moveTo(50,150);
    ctx.lineTo(50,200);


	ctx.stroke();

	//HOMBRE//
	let canvas2 = document.getElementById("myCanvas2");

	ctx = canvas2.getContext("2d");
	console.log(canvas2.width);
	console.log(canvas2.height);

	//cuerpo
	ctx.beginPath()
	ctx.fillStyle = "#804000";
	ctx.fillRect(85,50,75,125)
	ctx.stroke();

	//cabeza
    ctx.beginPath();
    ctx.strokeStyle= "#0000FF";
    ctx.arc(123, 25, 25, 0, 2 * Math.PI);
    ctx.stroke();

	//ojo izquierdo
    ctx.beginPath();
    ctx.strokeStyle= "#0000FF";
	ctx.fillStyle = "#FF0000";
    ctx.arc(115, 20, 5, 0, 2 * Math.PI);
	ctx.fill();
    ctx.stroke();
	
	//ojo derecho
    ctx.beginPath();
    ctx.strokeStyle= "#0000FF";
	ctx.fillStyle = "#FF0000";
    ctx.arc(135, 20, 5, 0, 2 * Math.PI);
	ctx.fill();
    ctx.stroke();

	//pierna izquierda
	ctx.beginPath()
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#804000";
	ctx.rect(85,175,25,70)
	ctx.stroke();

	//pierna derecha
	ctx.beginPath()
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#804000";
	ctx.rect(135,175,25,70)
	ctx.stroke();

	//brazo izquierdo
	ctx.beginPath()
	ctx.lineWidth = 2;
	ctx.fillStyle = "#804000";
	ctx.moveTo(35,140);
    ctx.lineTo(85,50);

	ctx.moveTo(45,150);
    ctx.lineTo(85,80);

	ctx.moveTo(35,140);
    ctx.lineTo(45,150);
	ctx.stroke();

	//brazo derecho
	ctx.beginPath()
	ctx.lineWidth = 2;
	ctx.fillStyle = "#804000";
	ctx.moveTo(200,140);
    ctx.lineTo(160,50);

	ctx.moveTo(190,150);
    ctx.lineTo(160,80);

	ctx.moveTo(200,140);
    ctx.lineTo(190,150);
	ctx.stroke();

	
}