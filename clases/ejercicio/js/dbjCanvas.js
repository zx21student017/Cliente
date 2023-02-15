class dbjCanvas {
	static dibujaRect(cnv, rctngl) {
		//pintamos el lienzo
		let ctx = cnv.getContext("2d");
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(5, 5, 400, 600);

		//pintar el rectangulo
		let ejeX = (400 - rctngl.alto) /2;
		let ejeY = (800 - rctngl.ancho) /2;

		ctx.fillStyle = "#ff00E5";
		ctx.fillRect(ejeX, ejeY, rctngl.alto, rctngl.ancho);

		//pintar el texto
		let perimetro = 2 * rctngl.alto + 2 * rctngl.ancho
		let area = (rctngl.alto * rctngl.ancho)

		ctx.font = "24px Arial";
		ctx.fillStyle = "#000000";
		ctx.fillText("Ancho de : " + rctngl.alto, 20, 50);
		ctx.fillText("Alto de : " + rctngl.ancho, 20, 100);
		ctx.fillText("Perímetro de : " + perimetro, 20, 150);
		ctx.fillText("Área de : " + area, 20, 200);

		//calcular la esquina izq superior
		let esquinaIzqX = ejeX;
		let esquinaIzqY = ejeY-parseInt(rctngl.ancho);
		let esquinaIzq = "X: "+esquinaIzqX+"px Y: "+esquinaIzqY+"px";
		ctx.fillText("Esquina : " + esquinaIzq, 20, 250);

		console.log("cambió");
	}
	static borraRect(cnv, rctngl) {
		let ctx = cnv.getContext("2d");
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(5, 5, 400, 600);

		//pintar el rectangulo
		let ejeX = (400 - rctngl.alto) / 2;
		let ejeY = 590 - rctngl.ancho;

		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(ejeX, ejeY, rctngl.alto, rctngl.ancho);

		//pintar el texto
		let perimetro = 2 * rctngl.alto + 2 * rctngl.ancho
		let area = (rctngl.alto * rctngl.ancho)

		ctx.font = "24px Arial";
		ctx.fillStyle = "#000000";
		ctx.fillText("Ancho de : " + 0, 20, 50);
		ctx.fillText("Alto de : " + 0, 20, 100);
		ctx.fillText("Perímetro de : " + 0, 20, 150);
		ctx.fillText("Área de : " + 0, 20, 200);

		//calcular la esquina izq superior

		console.log("borró");
	}
}