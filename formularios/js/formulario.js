let longNomb;
let edadNum;

function campoNoVacio(){

	/*
	if (document.getElementById("nombre").value.lenght==0) {
		return false;
	}
	return true;
	*/

	let nom = document.getElementById("nombre").value;
	let edad = document.getElementById("edad").value;

	longNomb = nom.lenght;
	if (longNomb == 0) {
		return false;
	}

	let patron=/\b[0-9]+\b/;
	if (!patron.test(edad)) {
		document.getElementById("edad").style.background="red";
		return false;
	}

	return true;
}