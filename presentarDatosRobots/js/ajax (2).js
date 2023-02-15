onload = principal;
 
function principal() {
	llamadaServidor();
    document.getElementById('siguiente').setAttribute("onclick", "llamadaServidor()");
}

function llamadaServidor() {
 
    //creamos variables para cada salida de datos
    let imagen = document.getElementById("salidaImg");
    let nombre = document.getElementById("salidaId");
    let nacimiento = document.getElementById("salidaNaci");
    let ciudad = document.getElementById("salidaCiud");
 
    //crear el objeto XMLHttpRequest para acceder al servidor
    let jsonhttp = new XMLHttpRequest();
 
    //**********************************************
    // codigo para tratar la respuesta
    jsonhttp.onreadystatechange = function () {
        //evaluar la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            console.log(datos);
 
           
            //const img = document.createElement("img");
            //img.src = datos.avatar;
            //img.alt = "Logo Robot";
            //document.body.appendChild(img);
 
 
            //añadimos la foto y los valores a sus respectivos lugares en el html

            imagen.setAttribute("src",datos.avatar);
            nombre.innerHTML = datos.first_name + " " + datos.last_name;
            nacimiento.innerHTML = datos.date_of_birth;
            ciudad.innerHTML = datos.address.city;
        }
    }
 
    //**********************************************
    // codigo para hacer la peticion al servidor
    //construir la petición al servidor
    jsonhttp.open("GET", "https://random-data-api.com/api/v2/users", true);
    jsonhttp.send();
}