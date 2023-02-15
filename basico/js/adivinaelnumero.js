onload=principal;


function principal(){
	let numAdiv = Math.floor(Math.random()*11);
	console.log("Número Adivinar: ", numAdiv);
	

	respUsu = "";
	let respUsu = prompt("Introduce un numero")//alerta


	while(numAdiv != respUsu) && (respUsu != "") {
		if (numAdiv > respUsu) {
			respUsu = prompt("Fallaste, el numero es mayor, prueba otra vez: ")
			console.log("Respuesta Usuario: ", respUsu);

		}else if(numAdiv < respUsu){
			respUsu = prompt("Fallaste, el numero es menor, prueba otra vez: ")
			console.log("Respuesta Usuario: ", respUsu);
		}
	}
	alert("GG");

}