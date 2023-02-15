//almacenamos los cuatro elementos input y creamos las variables
let nom = $("#nombreInput")
let apell = $("#apellidosInput")
let dni = $("#dniInput")
let cont = $("#contactoInput")

let openRequest = indexedDB.open("controlVisitas", 1);
let db;
let baseCreada = false;

//asociamos los botones a las funciones
$("#btnRegistrar").click(registrarEntradas);
$("#salida").click(registrarEntradas);
$("#btnLimpiar").click(limpiaFormulario);


openRequest.onupgradeneeded = function () {
    // se dispara si el cliente no tiene la base de datos
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('entrada')) { // si no está la tabla creada,
        db.createObjectStore('entrada', { keyPath: 'dni' }); // se crea.
    }
    if (!db.objectStoreNames.contains('salida')) { // si no está la tabla creada,
        db.createObjectStore('salida', { keyPath: 'dni' }); // se crea. Para borrarlo sería con el db.deleteObjectStore('salida')
    }
    // ...ejecuta la inicialización...

};

openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
    db = openRequest.result;
    // continúa trabajando con la base de datos usando el objeto db
    cargarTablaEntradas();
    cargarTablaSalidas();
};


//FUNCIONES


//cargamos las tablas
//entrada
function cargarTablaEntradas() {
    let transaction = db.transaction("entrada", "readonly");
    let registroEntradas = transaction.objectStore('entrada');

    let request = registroEntradas.openCursor();

    // es llamado para cada registro
    request.onsuccess = function () {
        let cursor = request.result;
        if (cursor) {
            let value = cursor.value;
            let key = cursor.key;
            console.log(key, value);
            cursor.continue();
            $('#tablaCuerpoE').append('<tr><td>' + value.nombre + '</td><td>' + value.apellidos + '</td><td>' + value.dni + '</td><td>' + value.contacto + '</td><td>' + value.fecha + '</td><td><button onclick="registrarSalidas(\''+value.dni+'\')" type="button" class="btn btn-outline-danger">Salida</button></td></tr>')
        } else {
            console.log("No hay trabajadores trabajando");
        }
    }
}

//salida
function cargarTablaSalidas() {
    let transaction = db.transaction("salida", "readonly");
    let registroSalidas = transaction.objectStore('salida');

    let request = registroSalidas.openCursor();

    // es llamado para cada registro
    request.onsuccess = function () {
        let cursor = request.result;
        if (cursor) {
            let value = cursor.value;
            let key = cursor.key;
            
            cursor.continue();
            $('#tablaCuerpoS').append('<tr><td>' + value.nombre + '</td><td>' + value.apellidos + '</td><td>' + value.dni + '</td><td>' + value.contacto + '</td><td>' + value.fecha + '</td><td>' + value.fechaSalida + '</td></tr>')
        }
    }
}

//funcion que LIMPIA los datos en el formulario
function limpiaFormulario() {
    nom.val("");
    apell.val("");
    dni.val("");
    cont.val("");
}

//funcion que REGISTRA los datos del formulario en la tabla de ENTRADAS
function registrarEntradas() {
    let transaction = db.transaction("entrada", "readwrite"); // (1)

    // obtiene un almacén de objetos para operar con él
    let regEntrada = transaction.objectStore("entrada"); // (2)

    //creamos la fecha de ahora
    let fech = new Date()

    let trabajador = {
        nombre: nom.val(),
        apellidos: apell.val(),
        dni: dni.val(),
        contacto: cont.val(),
        fecha: fech
    };

    let salida = regEntrada.add(trabajador);

    salida.onsuccess = function () {
        console.log("Trabajador registrado", salida.result);
    };

    salida.onerror = function () {
        console.log("Error, no se ha podido registrar al trabajador.", salida.error);
    };

    if (dni.val() == "" || nom.val() == "" || apell.val() == "" || cont.val() == "") {
        alert("campos vacios")
    } else {
        //registra los valores en la tabla
        $('#tablaCuerpoE').append('<tr><td>' + nom.val() + '</td><td>' + apell.val() + '</td><td>' + dni.val() + '</td><td>' + cont.val() + '</td><td>' + fech + '</td><td><button onclick="registrarSalidas()" type="button" class="btn btn-outline-danger">Salida</button></td></tr>')

        //limpiamos el formulario
        limpiaFormulario();
    }
}

function registrarSalidas(dniEnt) {

    let transactionE = db.transaction("entrada", "readwrite"); // (1)

    // obtiene un almacén de objetos para operar con él
    let regEntrada = transactionE.objectStore("entrada"); // (2)

    let salidaE = regEntrada.get(dniEnt.toString());

    salidaE.onsuccess = function () {
        console.log("Trabajador registrado", salidaE.result);

        let cursor = salidaE.result;

        //registra los valores en la tabla
        $('#tablaCuerpoS').append('<tr><td>' + cursor.nombre + '</td><td>' + cursor.apellidos + '</td><td>' + cursor.dni + '</td><td>' + cursor.contacto + '</td><td>' + cursor.fecha + '</td><td><button onclick="registrarSalidas()" type="button" class="btn btn-outline-danger">Salida</button></td></tr>');

        

        let transactionS = db.transaction("salida", "readwrite"); 

        let regSalida = transactionS.objectStore("salida");

        //creamos la fecha de salida
        let fechS = new Date()

        let trabajador = {
            nombre: cursor.nombre,
            apellidos: cursor.apellidos,
            dni: cursor.dni,
            contacto: cursor.contacto,
            fecha: cursor.fecha,
            fechaSalida: fechS
        };

        let salidaS = regSalida.add(trabajador);

        salidaS.onsuccess = function () {
            console.log("Salida de trabajador", salidaS.result);

            let transactionE = db.transaction("entrada", "readwrite"); // (1)

            // obtiene un almacén de objetos para operar con él
            let regEntrada = transactionE.objectStore("entrada"); // (2)

            //borramos el trabajador de entrada
            regEntrada.delete(dniEnt);

        };

        salidaS.onerror = function () {
            console.log("Error en la salida del trabajador.", salidaS.error);
        };

    };

    salidaE.onerror = function () {
        console.log("Error, no se ha podido registrar al trabajador.", salidaE.error);
    };


}