const persona1 = {
	nombre:"Ana",
	apellidos:"Lopez",
	edad:29,
	nombrecompleto: function(){
		return this.nombre + " " + this.apellidos;
	},
	fecNac:new Date("1993-04-12")
}

const persona2 = {
	nombre:"Juan",
	apellidos:"Garcia",
	edad:4,
	nombrecompleto: function(){
		return this.nombre + " " + this.apellidos;
	},
	fecNac:new Date("2018-04-12")
}

const persona3 = {
	nombre:"Antonio",
	apellidos:"Fernandez",
	edad:45,
	nombrecompleto: function(){
		return this.nombre + " " + this.apellidos;
	},
	fecNac:new Date("1977-04-12")
}

const persona0 = {
	nombre:"Federico",
	apellidos:"Zapico",
	edad:54,
	nombrecompleto: function(){
		return this.nombre + " " + this.apellidos;
	},
	fecNac:new Date("1968-04-12")
}

const listaPersonas = [persona0,persona1,persona2,persona3];

function mostrarObjetos(){
	console.log(persona1.nombre);
	console.log(persona1.apellidos);
	console.log(persona1.edad);
	console.log(persona0.fecNac);

	persona1.direccion = "calle principal...";
	console.log(persona1.nombrecompleto());

	console.log(persona2["nombre"]);
	console.log(persona2["apellidos"]);
	console.log(persona2["edad"]);
	console.log(persona2.nombrecompleto());

	console.log(listaPersonas);
}

function ordenarListaPersonas(){
	listaPersonas.sort(function(a, b){return a.edad - b.edad});
	console.log(listaPersonas);
}

function ordenarListaPersonasPorApellidos(){
	listaPersonas.sort(ordenAlfabeticoPorApellidos);
	console.log(listaPersonas);
}

function ordenAlfabeticoPorApellidos(a,b){
	if (a.apellidos < b.apellidos) {return -1;}
	if (a.apellidos > b.apellidos) {return 1;}
	return 0;
}

function ordenarListaPersonasPorFecNac(){
	listaPersonas.sort(ordenPorFecNac);
	console.log(listaPersonas);
}

function ordenAlfabeticoPorFecNac(a,b){
	if (a.FecNac < b.FecNac) {return -1;}
	if (a.FecNac > b.FecNac) {return 1;}
	return 0;
}

function personaMayor() {
	ordenarListaPersonasPorFecNac();
	document.getElementById("salida").innerHTML=listaPersonas[0].nombrecompleto();
}

function personaMenor() {
	ordenarListaPersonasPorFecNac();
	document.getElementById("salida").innerHTML=listaPersonas[listaPersonas.length-1].nombrecompleto();
}