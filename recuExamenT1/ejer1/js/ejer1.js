//creamos el prompt
let prom = (prompt("Introduce tres numeros: "));
let numeros = prom.split(" ");

console.log(numeros);
console.log(Math.max(numeros[0],numeros[1],numeros[2]));

let n1 = parseInt(numeros[0]);
let n2 =parseInt(numeros[1]);
let n3 =parseInt(numeros[2]);

if (numeros.length==3 && Number.isInteger(n1) && Number.isInteger(n2) && Number.isInteger(n3)) {

    //nº más grande
    alert("El numero más grande es el: " + Math.max(numeros[0],numeros[1],numeros[2]));
    
} else {
    alert("Error algún número no es entero/tiene que haber 3 numeros");
}

//Number.isInteger(numeros[0]) && Number.isInteger(numeros[1]) && Number.isInteger(numeros[2])