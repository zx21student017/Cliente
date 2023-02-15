$(principal);

function principal() {
	$('a.printPage').click(function () {//a los enlaces con clase 'printPage' cuando se hace click le aplica una funcion
		window.print();//pilla la página y la imprime
		return false;
	});
}