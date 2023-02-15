function meteEnLista(){

    let tabla = document.getElementById("tabla");
    let texto = document.getElementById("nuevo").value;
    
    //parrafo que copia el input
    let parrafo = document.createElement("p");
    parrafo.innerHTML = texto;

    tabla.appendChild(parrafo);

    //creamos boton borrar sin metodo
    let button = document.createElement("button");
    button.innerHTML = "Borrar";

    tabla.appendChild(button);

    //guardamos el parrafo en un td
    let tdParrafo = document.createElement("td");
    tdParrafo.appendChild(parrafo);
    
    tabla.appendChild(tdParrafo);

    //guardamos el button en un td
    let tdButton = document.createElement("td");
    tdButton.appendChild(button);
    
    tabla.appendChild(tdButton);

    //guardamos los tr en la tabla
    let tr = document.createElement("tr");
    tr.appendChild(tdParrafo);
    tr.appendChild(tdButton);

    tabla.appendChild(tr);

}