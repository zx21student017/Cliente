function validaTexto() {
    
    //validar que el texto tiene entre 8 y 10 caracteres
    //validar que empieza por "123"

    let resp = true;

    let t = document.getElementById("texto").value;

    if(t.length<8 || t.length>10){
        alert("el texto no tiene entre 8 y 10 caracteres");
        resp=false;
    }
    if(t.substr(0,3)!=="123"){
        alert("el texto no empieza por 123");
        resp=false;
    }

    return resp;
}

/*  Para seleccionar los tres últimos caracteres 
if(t.substr(-3)=="123"){
        alert("el texto termina por 123");
        resp=true;
    }
*/

/*  Para que un caracter sea un numero
if (!Number.isInteger(t[4])){
        alert("la posicion 5 tiene que ser un numero");
        resp=false;
    }
*/