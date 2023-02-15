onload=principal;

function principal(){
	let res = 0
	let salida = ""
	let n = prompt("Introduce un numero")//alerta
	let num = parseInt(n)

	while(num >= 1 && num <= 10){
		
	}

	if (num >= 1 && num <= 10) {
		
		for (let i = 1; i <= 10; i++) {
			res = i * num
			salida += i + " x " + num + " = " + res + "<br>"	
	}
	
	} else {
		console.log(" Error, el número tiene que estar comprendido entre el 1 y el 10. ")
		alert(" Error, el número tiene que estar comprendido entre el 1 y el 10. ")
	}
	document.getElementById("texto").innerHTML = salida;//linea para escribir en un párrafo
}