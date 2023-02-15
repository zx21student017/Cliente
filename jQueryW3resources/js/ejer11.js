function new_div() {//cuando se da al click (onclick) hace la funcion
	$(document).ready(function () {
		var test = {//creamos un objeto para añadirlo después al div, quedaría así <div id="div" class="divclass" style...>
			id: "div",
			class: "divclass",
			css: {//le añadimos un css al objeto
				"color": "Green"
			}
		};

		var $div = $("<div>", test);//creamos un objeto en el que seleccionamos un div y le agregamos sus elementos

		$div.html("New Division");//texto que queremos que contenga

		$("body").append($div);//agregamos al body o al elemento que queramos el objeto creado
	});
}