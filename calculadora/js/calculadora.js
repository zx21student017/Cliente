onload=principal;

class Calcula{
    constructor(){
        this.operando1 = 0;
        this.operando2 = 0;
        this.operacion = 0; //1 -> + ; 2 -> - ; 3 -> * ; 4 -> /
    }

    completaOper1(n){
        this.operando1 = this.operando1*10 + n;
    }
    completaOper2(n){
        this.operando2 = this.operando2*10 + n;
    }
    
    igual(){
        switch(this.operacion){
            case 1:
                return suma()
                break;
            case 2:
                return resta()
                break;
            case 3:
                return multiplicacion()
                break;
            case 4:
                return division()
                break;
            default:
                return -1;
        }
    }

    suma(){
        return operando1 + operando2;
    }
    resta(){
        return operando1 - operando2;
    }
    multiplicacion(){
        return operando1 * operando2;
    }
    division(){
        if(operando2==0){
            return"devolvemos division por 0"
        }else{
            return operando1 / operando2;
        }

    }
}

let listaBotones;
let simboloBotones = [7,8,9,"\"+\"",4,5,6,"\"-\"",1,2,3,"\"*\"","\",\"",0,"\"=\"","\"/\""];
let cal = new Calcula();

let estado = 0;

let op1 = document.createElement("span");
let sig = document.createElement("span");
let op2 = document.createElement("span");
let res = document.createElement("span");

let n1 = "";
let n2 = "";

let res = "";

function principal() {
    dibujaCalculadora();
}

function dibujaCalculadora() {
   
    let calculadora = document.getElementById("calculadoraId");
   
    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class","boton");
        texto.setAttribute("onclick","pulsado("+simboloBotones[index-1]+")");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML=simboloBotones[index-1];
    }
}

function pulsado(n) {
    console.log(n);

    let pantalla = document.getElementById("num");

    if (estado == -1) {
        n1="";
        n2="";
        res="";
        sim="";

        oper.innerHTML = "";
        estado = 0;
    }

    if ((n==1 || n==2 || n==3 || n==5 || n==6 || n==7 || n==9 || n==10 || n==11 || n||14) && (estado == 0 ||estado == 1 || estado == 2 || estado == 3)){
        if (estado == 0 || estado == 1) {
            switch (n){
                case 1:
                    n1 = n1 + "7";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 2:
                    n1 = n1 + "8";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 3:
                    n1 = n1 + "9";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 5:
                    n1 = n1 + "4";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 6:
                    n1 = n1 + "5";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 7:
                    n1 = n1 + "6";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 9:
                    n1 = n1 + "1";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 10:
                    n1 = n1 + "2";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 11:
                    n1 = n1 + "3";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;
                case 14:
                    n1 = n1 + "0";
                    op1.innerHTML = n1;
                    oper.appendChild(op1);
                    pantalla.appendChild(oper);
                    estado = 1;
                    break;

            }
        }else if(estado == 2 || estado == 3){
            switch(n){
                case 1:
                    n2 = n2 + "7";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 2:
                    n2 = n2 + "8";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 3:
                    n2 = n2 + "9";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 5:
                    n2 = n2 + "4";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 6:
                    n2 = n2 + "5";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 7:
                    n2 = n2 + "6";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 9:
                    n2 = n2 + "1";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 10:
                    n2 = n2 + "2";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 11:
                    n2 = n2 + "3";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
                case 14:
                    n2 = n2 + "0";
                    op2.innerHTML = n2;
                    oper.appendChild(op2);
                    pantalla.appendChild(oper);
                    estado = 3;
                    break;
            }
        }
    }

    
}