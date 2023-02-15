function cambiaFondo(parrafo){

	if (parrafo=="p1"){
		document.getElementById("p1").style.backgroundColor="lightblue";
		document.getElementById("p2").style.backgroundColor="white";
		document.getElementById("p3").style.backgroundColor="white";
	}else if(parrafo=="p2"){
		document.getElementById("p1").style.backgroundColor="white";
		document.getElementById("p2").style.backgroundColor="lightblue";
		document.getElementById("p3").style.backgroundColor="white";
	}else if(parrafo=="p3"){
		document.getElementById("p1").style.backgroundColor="white";
		document.getElementById("p2").style.backgroundColor="white";
		document.getElementById("p3").style.backgroundColor="lightblue";
	}
}
/*
document.getElementById("p1").style.color="red";<===CAMBIA COLOR LETRAS
document.getElementById("p1").style.font="40px Arial";<===CAMBIA FUENTE LETRAS
*/