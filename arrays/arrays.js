function arrayPush(){
	let lista = datoUsuario.value.split(" ");
	lista.push(numero.value);
	salida.innerHTML = lista.join("-");
}

function ordenarNormal(){
	let lista = datoUsuario.value.split(" ");
	lista.sort();
	salida.innerHTML = lista.join("-");
}

function ordenarNormalReverse(){
	let lista = datoUsuario.value.split(" ");
	lista.sort().reverse();
	salida.innerHTML = lista.join("-");
}

function ordenarNumericamente(){
	let lista = datoUsuario.value.split(" ");
	lista.sort(function(a, b){return a - b});
	salida.innerHTML = lista.join("-");
}

function ordenNum(a, b){
	if (a<50) {
		return 1;
	}else{
		return 0;
	}
}

function arrayForEach(){
	let lista = datoUsuario.value.split(" ");
	console.log(lista);
	lista.ForEach(pasaAEntero);
}

function pasaAEntero (value,index,array){
	salida.innerHTML += value + "-" + index + ":";
	if(value>=100) {
		array[index] = parseInt(value);
	}
}

function arrayMap () {
	const lista = datoUsuario.value.split(" ");
	const nuevaLista = lista.map(pasaAEntero);
}
