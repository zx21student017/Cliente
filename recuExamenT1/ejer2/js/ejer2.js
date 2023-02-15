function validaDatos() {
    let resp = true;

    let t = document.getElementById("tex").value;
    let n = document.getElementById("num").value;

    console.log(t);
    console.log(n);

    if(t.length>10){
        alert("el texto no tiene menos de 10 caracteres");
        resp=false;
    }
    if(!Number.parseInt(n) || n>100){
        alert("el numero es mayor que 100");
        resp=false;
    }

    return resp;
}

/*  Para seleccionar los últimos caracteres 
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