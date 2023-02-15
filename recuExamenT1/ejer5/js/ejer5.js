//creamos la funcion para poner bordes
function ponerBorde(){
	//recibimos y guardamos el valor dado en el input 'ancho' para guardar su valor
	let num = document.getElementById("ancho").value;

	//añadimos al elemento con id parrafor un estilo con borde según el ancho(num) que le metamos
	document.getElementById("parrafo").style.border=""+num+"px solid";
}

//creamos la funcion para quitar bordes
function quitarBorde(){
	document.getElementById("parrafo").style.border="0px solid";
}