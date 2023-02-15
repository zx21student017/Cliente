onload = compruebaLoteria;

function compruebaLoteria() {

	//creamos una variable para guardar los numeros del boleto
	let boleto = (document.getElementById("boleto").value);
	numeros = boleto.split(" ");

	//guardamos los numeros en una variable para comprobar si son enteros
	let b1 = parseInt(numeros[0]);
	let b2 = parseInt(numeros[1]);
	let b3 = parseInt(numeros[2]);
	let b4 = parseInt(numeros[3]);
	let b5 = parseInt(numeros[4]);

	//si cada numero es entero y son 5 numeros pasa a la siguiente condición
	if ((Number.isInteger(b1) && Number.isInteger(b2) && Number.isInteger(b3) && Number.isInteger(b4) && Number.isInteger(b5))
		 && (numeros.length == 5)) {
		
		//si cada numero esta comprendido entre 1 y 60, realiza la peticion
		if ((b1 > 0 && b1 < 60)&&(b2 > 0 && b2 < 60)&&(b3 > 0 && b3 < 60)&&(b4 > 0 && b4 < 60)&&(b5 > 0 && b5 < 60)) {

			//crear el objeto XMLHttpRequest para acceder al servidor
			let xmlhttp = new XMLHttpRequest();

			//registrar la funcion que se ejecuta con la respuesta del servidor
			xmlhttp.onreadystatechange = function () {

				//evaluar la respuesta del servidor
				if (this.readyState == 4 && this.status == 200) {

					//tratar los datos enviados por el servidor
					document.getElementById("salida").innerHTML = "Boleto con "+this.responseText+" aciertos";
				}
			};

			//construir la peticion al servidor
			xmlhttp.open("GET", "primos.py?numeros=" + boleto, true);

			//ejecutar la peticion al servidor
			xmlhttp.send();

		} else {
			alert("error boleto, deben estar comprendidos entre el 1 y el 60");
		}
	} else {
		alert("error boleto, debe tener 5 numeros");
	}
}