onload=principal;

function principal() {
	document.getElementById("enviar").setAttribute("onclick","llamadaAjax()");
}

function llamadaAjax() {

	let numero = document.getElementById("numero").value;

	//crear el objeto XMLHttpRequest para acceder al servidor
	let xmlhttp = new XMLHttpRequest();

	//registrar la funcion que se ejecuta con la respuesta del servidor
	xmlhttp.onreadystatechange = function() {

		//evaluar la respuesta del servidor
		if (this.readyState == 4 && this.status == 200) {

			//tratar los datos enviados por el srvidor
			document.getElementById("salida").innerHTML = this.responseText;
		}
	};

	//construir la peticion al servidor
	xmlhttp.open("GET", "dimeNumero.py?num="+numero, true);

	//ejecutar la peticion al servidor
	xmlhttp.send();
}