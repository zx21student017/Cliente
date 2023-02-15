onload = principal;

function principal(){
    let f1 = document.getElementById("fecha1");
    let f2 = document.getElementById("fecha2");
}

function diferenciaFechas(){
    if(f1.value!="" && f2.value!=""){
        console.log(f1.value);
        console.log(f2.value);

        let fd1 = new Date(f1.value);
        let fd2 = new Date(f2.value);
    }
}