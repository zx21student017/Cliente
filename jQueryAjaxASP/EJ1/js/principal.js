$("#btn").click(principal);

function principal(){
    $.post("parrafo.html",{},respuesta);
}

function respuesta(data, status){
    $("#salida").append(data);
}

//---------------------------------------

$("#btn2").click(llamadaPython);

function llamadaPython(){
    $.post("py/prueba.py",{
        numero: $("#numero").val()
    },
    respuesta)
}