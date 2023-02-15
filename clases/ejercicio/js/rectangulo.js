class Rectangulo {
    //constructor
    constructor(al, an) {
        this._alto = al;
        this._ancho = an;
    }

    //getters y setters
    get alto() {
        return this._alto;
    }

    set alto(al) {
        this._alto = al;
    }

    get ancho() {
        return this._ancho;
    }

    set ancho(an) {
        this._ancho = an;
    }

}