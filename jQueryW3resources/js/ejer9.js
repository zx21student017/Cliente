$(principal);

function principal() {
	var maxLength = 15;

	$('textarea').keyup(function () {//en el textarea se le aplica cuando se "levanta la tecla" la funcion:
		var textlen = maxLength - $(this).val().length;//a la variable se le va restando a 15 (límite) lo que se va escribiendo
		$('#rchars').text(textlen);//en el span con id 'rchars' se va actualizando los caracteres que nos quedan
	});
}