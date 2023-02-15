$(principal);

function principal() {
	$('p').each(function () {
		var pdata = $(this);
		pdata.html(pdata.text().replace(/(^\w+)/, '<b>$1</b>') );//guardar la primera palabra y remplanzarla por el nuevo texto entre <b>
	});
}