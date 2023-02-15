onload=principal;

let ctx;

function principal(){
	let canvas = document.getElementById("myCanvas");

	ctx = canvas.getContext("2d");
	console.log(canvas.width);
	console.log(canvas.height);

	//primer cuadrado
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);


	//segundo cuadrado
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(10,10,150,75);

	let canvas1 = document.getElementById("myCanvas1");

	ctx1 = canvas1.getContext("2d");
	console.log(canvas1.width);
	console.log(canvas1.height);

	ctx1.fillStyle = "000000";
	ctx1.fillRect(0,0,canvas1.width/2,canvas1.height/2);

	ctx1.fillStyle = "FFFFFF";
	ctx1.fillRect(canvas1.width/2,canvas1.height/2,canvas1.width/2,canvas1.height/2);
}