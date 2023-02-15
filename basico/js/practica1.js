onload=principal;

function principal() {
	document.getElementById('boton1').onclick=cambia;
	document.getElementById('boton2').onclick=vuelve;
}

function cambia() {

	console.log("estoy en cambia");

	parrafos = document.getElementsByTagName('p');

	for (parr of parrafos){
		parr.innerHTML="Cambiado";
	}
}

function vuelve() {

	console.log("estoy en vuelve");

	parrafos = document.getElementsByTagName('p');

	for (parr of parrafos){
		parr.innerHTML="Esto es un párrafo";
	}
}

