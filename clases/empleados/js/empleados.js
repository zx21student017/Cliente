class Empleado extends Persona {
    //constructor
    constructor(nom, apell, ed, sal){
        super(nom, apell, ed);
        this._salario = sal;
    }

    //getters y setters
	get salario(){
		return this._salario;
	}

	set salario(s){
		this._salario=s;
	}

	infoEmpleado(){
		return this.infoPersona()+" \nsueldo: "+this._salario+"€";
	}
}