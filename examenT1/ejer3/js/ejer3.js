//hacer una funcion que se llame sonPares

//que recibe un array con numeros

//comprueba que son todos pares

//devuelve true si se cumple la condicion y false en caso contrario
function sonPares(listaNumeros){
    let respuesta = true;

    for (var i = 0; i < listaNumeros.length; i++){
        if(listaNumeros[i]%2 != 0){
            return false;
        }
    }

    return respuesta;
}

alert(sonPares([1,2,3,4]));//false
alert(sonPares([2,8,4,12]));//true

//                  CUENTA PARES
// let cont=0;
// for (let i = 0; i < listaNum.length; i++) {
//     if (listaNum[i] % 2 == 0) {//contar cuantos pares hay en array
//         cont++;
//     }
// }
// return cont;