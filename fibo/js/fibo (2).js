onload=principal;

function principal() {
	document.getElementById("pedirDatos").setAttribute("onclick","llamadaServidor()");
}

function llamadaServidor() {
	//****************************************************************************
	//configuracion y objetos

	//parrafo para la salida de datos
	let parrafo = document.getElementById("salida");

	//recoger el dato del input
	let numero = document.getElementById("entrada").value;
	let numeroI = document.getElementById("entradaI").value;

	//crear el objeto XMLHttpRequest para acceder al servidor
	let jsonhttp = new XMLHttpRequest();

	//****************************************************************************
	//codigo para tratar la respuesta
	jsonhttp.onreadystatechange = function(){
		//evaluar la respuesta del servidor
		if (this.readyState == 4 && this.status == 200) {
			let listaN = JSON.parse(this.responseText);
			let lista = "<ul>";
			for (n of listaN){
				lista += "<li>" + n + "</li>";
			}
			lista += "</ul>"
			parrafo.innerHTML = lista;
		}
	}

	//****************************************************************************
	//codigo para hacer la peticion al servidor
	//construir la peticion al servidor
	jsonhttp.open("GET", "fibo.py?num="+numero+"&numI="+numeroI, true);

	//ejecutar la peticion al servidor
	jsonhttp.send();
}