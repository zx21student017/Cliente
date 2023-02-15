$(principal);

function principal() {
    //a todos los parrafos (p) se le asigna la funcion al evento onclick
    $("p").click(function(){
        $(this).hide();
    });
    $("p").mouseenter(cambiaFondoGris);
    $("p").mouseleave(cambiaFondoBlanco);
}

function cambiaFondoGris(){
    $(this).css("background-color","gray");
}

function cambiaFondoBlanco(){
    $(this).css("background-color","white");
}