onload=principal;

let ctx;

function principal(){
	let canvas = document.getElementById("myCanvas");

	ctx = canvas.getContext("2d");
	console.log(canvas.width);
	console.log(canvas.height);

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