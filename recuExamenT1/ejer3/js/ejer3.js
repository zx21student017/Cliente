
function cuentaPronombres(palabras){
    let cont=0;

    for (var i = 0; i < palabras.length; i++){
        if(palabras[i]=="yo" || palabras[i]=="tu" || palabras[i]=="el"){
            cont++;
        }
    }

    return cont;
}

alert(cuentaPronombres(["yo","tu","el"]));
alert(cuentaPronombres(["yo","tu","el","yo"]));
alert(cuentaPronombres(["yo","qwe","el","yqwe"]));

//                  CUENTA PARES
// let cont=0;
// for (let i = 0; i < listaNum.length; i++) {
//     if (listaNum[i] % 2 == 0) {//contar cuantos pares hay en array
//         cont++;
//     }
// }
// return cont;