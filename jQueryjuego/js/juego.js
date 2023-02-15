$(rellenarRandom)

let cartasArray = ["img/charizard1.png","img/charizard2.png","img/ditto1.png","img/ditto2.png","img/infernape1.png","img/infernape2.png"]
let cartasRandom = []
let volteada = 0;

function rellenarRandom() {
    cartasRandom = cartasArray.sort(function(){
        return Math.random() - 0.5;
    });

    asignarClick();
}

function asignarClick() {
    $.each($('.celda>img'), function(index, value) {
        $('#'+value.id).bind('click', function() {
            darLaVuelta($(this));
        });
    });
}

function darLaVuelta(elem) {
    elem.attr("src", cartasArray[elem[0].id.split('detras').pop()]);
    console.log(elem[0].id.split('detras').pop());

    if (volteada != 2) {

    }
    if (volteada == 2) {
        comprobar();
    }
}

function comprobar() {
    if (par1 == par2) {

    }else{

    }

    if ($("[oculto = 'no']").lenght == cartasArray.lenght){
        setTimeout(function(){
            alert("Ganaste");
            let conf = confirm("Volver a Jugar");
            if (conf){
                $(".grid-container").empty();
                
                rellenarRandom();
            }
        }, 500);
    }
}