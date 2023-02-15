class ElementoHola extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        <div>
            <p id="salida">holaa</p>
        </div>
        ;
    }
}

customElements.define('elemento-hola',ElementoHola);

document.getElementById("salida").innerHTML="adios";