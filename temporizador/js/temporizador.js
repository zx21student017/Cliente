onload=principal

let tiempo = 0;
let salida;
let idTemporizador;
let tempoActivo = false;

function principal() {
	//la asignacion de unciones a botones
	document.getElementById("inicio").setAttribute("onclick","iniciar()");
	document.getElementById("parar").setAttribute("onclick","parar()");
	document.getElementById("reset").setAttribute("onclick","reset()");
	//captura del elemento de salida
	salida = document.getElementById("salida");
}

//responde al boton de iniciar, carga el tiempo
//e inicia el temp a 1 segundo (1000milisegundos)
function iniciar() {
	if (!tempoActivo) { //si no hay temp activo
		tempoActivo=true; //se marca que hay un temp
		tiempo = document.getElementById("tiempo").value; //se captura el tiempo inicial
		salida.inerHTML=tiempo; //se pone en la salida
		idTemporizador=setInterval(actualizarSalida,1000); //se inicia el temporizador por intervalo
	}
	
}

//funcion que actualiza el tiempo, descuenta un segundo cada vez que se ejecuta
function actualizarSalida() {
	if (tiempo <= 1) { //finaliza el temporizador cuando se alcanza el valor 1
		//cancelar el interval
		clearInterval(idTemporizador);//quita el temporizador guardado en idTemporizador
		tempoActivo=false; //se indica que ya no hay temporizador activo
	}
	if (tiempo==0) {
		tiempo--; //resta uno al tiempo
		salida.innerHTML=tiempo; //lo saca por el parrafo "salida"
	}
	
}

//reinicia el temporizador
function reset() {
	if (tempoActivo) { //si hay un temp activo lo quita
		clearInterval(idTemporizador);
	}
	//inicializa los valores a 0
	salida.inerHTML=0;
	tiempo=0;
	tempoActivo = false;
}

//parar el temporizador
function parar() {
	if (tempoActivo) { //si esta activo un temporizador, lo para e indica que no hay temp
		clearInterval(idTemporizador);
		tempoActivo=false;
	}else{ //si NO esta activo un temporizador, lo arranca e indica que hay un temporizador 
		idTemporizador=setInterval(actualizarSalida,1000);
		tempoActivo=true;
	}
}