let res = 0
let salida = ""
let n = prompt("Introduce un numero")//alerta
let num = parseInt(n)

if (num >= 1 && num <= 10) {
	
	console.log(" tabla del " + num)
	for (let i = 1; i <= 10; i++) {
		res = i * num
		salida = i + " x " + num + " = " + res
		console.log(salida)
	}
	
} else {
	console.log(" Error, el número tiene que estar comprendido entre el 1 y el 10. ")
}