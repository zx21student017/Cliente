let openRequest = indexedDB.open("valores", 1);

let db;

openRequest.onsuccess = function () {
    console.log("Base de datos abierta con exito");

    //objeto para manejar las operaciones con la base de datos
    let db = openRequest.result;

    let trns = db.transaction("datosFormulario", "readwrite");

    let almacenValores = trns.objectStore("datosFormulario");

    let numeros = 200;

    db.createObjectStore("datosFormulario")
}

openRequest.onerror = function () {
    console.log("Base de datos ha tenido un ERROR");
}

openRequest.onupgradeneeded = function () {

    //este evento se lanza si:
    //no hay base de datos
    //o la base de datos actual es de version menor que la indicada arriba

    console.log("lanzad el evento on upgrade needed");

    //ovjeto para manejar las operaciones con la base de datos
    let db = openRequest.result;

    if(EventCounts.oldVersion!=1){
        db.createObjectStore("datosFormulario");
    }
    db.createObjectStore("otroObjetoStore");
    db.createObjectStore("otroMasObjetoStore");

    // let db = openRequest.result;
    // switch (evento.oldVersion) {// version de db existente
    //     case 0:
    //         console.log("No hay base de datos");
    //         break;
    //     case 1:
    //         console.log("Base de datos en version 1");
    //         break;
    //     default:
    //         console.log("Version" + evento.oldVersion);
    //         break;
    // }
}