//Clase ersona exportada para usarse en otros ficheros ".js"
export default class Persona {
	//el constructor se pone con la palabra de constructor
	//este constructor de persona crea tres atributos
	construtor(nombre, apellidos, edad){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
	}
	//tiene un metodo que devuelve el nombre completo
	nombrecompleto(){
		return this.nombre + " " + this.apellidos;
	}
}