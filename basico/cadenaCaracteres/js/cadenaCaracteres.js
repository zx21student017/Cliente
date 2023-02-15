function ejer1(){
	console.log("Ejercicio1");
	//recuperar el texto del input
	let texto = document.getElementById("cadena").value;

	//recorrer el texto con un for
		//por cada letra meter un <br>
	let salida = "";

	for (var i = 0; i < texto.length; i++) {
		salida += texto[i] + "<br>";
	}

	//texto obtenido meter en <p> con id ejer1
	document.getElementById("pejer1").innerHTML=salida;
}
function ejer2(){
	console.log("Ejercicio2");
	//recuperar el texto del input
	let texto = document.getElementById("cadena").value;

	//recorrer el texto con un for
		//contando letras
	let contLetras = 0;

	for (var i = 0; i < texto.length; i++) {
		if((texto[i]>='a' && texto<='z')||(texto[i]>='A' && texto<='Z')||(texto[i] == 'ñ')||(texto[i] == 'Ñ')){
			contLetras++;
		}
	}
	//texto obtenido meter en <p> con id ejer2
	document.getElementById("pejer2").innerHTML=contLetras;
}
function ejer3(){
	console.log("Ejercicio3");
	//recuperar el texto del input
	let texto = document.getElementById("cadena").value;

	let salida = "";

	for (var i = texto.length - 1; i >= 0; i--) {
		salida += texto[i];
	}

	//texto obtenido meter en <p> con id ejer3
	document.getElementById("pejer3").innerHTML=salida;
}
function ejer4(){
	console.log("Ejercicio4");
	//recuperar el texto del input
	let texto = document.getElementById("cadena").value;
	//recuperar el texto del input para buscar
	let buscador = document.getElementById("buscador").value;

	texto.toUpperCase();
	buscador.toUpperCase();

	no = texto.search(buscador);

	//texto obtenido meter en <p> con id ejer4
	if(texto.search(buscador)>=0){
		document.getElementById("pejer4").innerHTML=no;
	}else if (texto.search(buscador)==-1){
		document.getElementById("pejer4").innerHTML="no está";
	}

}
function ejer5(){
	console.log("Ejercicio5");
	//recuperar el texto del input
	let texto = document.getElementById("cadena").value;
	let buscador5 = document.getElementById("buscador5").value;

	//contamos las letras que haya del mismo tipo
	let contLetras = 0;
	
		for(i=0; i<texto.length; i++){
			if((texto[i]>='a' && texto<='z')||(texto[i]>='A' && texto<='Z')||(texto[i] == 'ñ')||(texto[i] == 'Ñ')){
				if (texto[i] == buscador5) {
				contLetras++;
				}
			}
				
    	}
			
	    //texto obtenido meter en <p> con id ejer5
		document.getElementById("pejer5").innerHTML="Su letra "+buscador5+" contiene: "+contLetras+" letras";

}
function ejer6(){
	console.log("Ejercicio6");
	let texto = document.getElementById("cadena").value;

	let contadorA = 0;
	let contadorE = 0;
	let contadorI = 0;
	let contadorO = 0;
	let contadorU = 0;

	for(i=0; i<texto.length; i++) {
 		if (texto[i]=='a'){ 
    		contadorA++;
  		}else if(texto[i]=='e'){
  			contadorE++;
  		}else if(texto[i]=='i'){
  			contadorI++;
  		}else if(texto[i]=='o'){
  			contadorO++;
  		}else if(texto[i]=='u'){
  			contadorU++;
  		}
  	}

	//texto obtenido meter en <p> con id ejer5
	document.getElementById("pejer6").innerHTML="A: "+contadorA+"  |||E: "+contadorE+"  |||I: "+contadorI+"  |||O: "+contadorO+"  |||U: "+contadorU;

}
function ejer7(){
	console.log("Ejercicio7");

}
function ejer8(){
	console.log("Ejercicio8");

}