class Persona {
	constructor(nom,apell,ed){
		this._nombre=nom;
		this._apellidos=apell;
		this._edad=ed;
	}

	get nombre(){
		return this._nombre;
	}

	set nombre(n){
		this._nombre=n;
	}

	get apellidos(){
		return this._apellidos;
	}

	set apellidos(a){
		this._apellidos=a;
	}

	get edad(){
		return this._edad;
	}

	set edad(e){
		this._edad=e;
	}

	infoPersona(){
		return this._nombre+" "+this._apellidos+" "+this._edad;
	}
}