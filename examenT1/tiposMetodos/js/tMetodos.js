/*Mostrar lo que se escribe en input al pulsar fuera de el en un alert*/

//onchange 
function muestra(t){
    let inp= document.getElementById("texto"+t).value;
    alert(inp);
  } 
  
  /*
  function muestra(t){
      alert("Se ha modificado el texto: "+t);
  }
  */
  
  //onclick
  function over() {
    let b = document.getElementById("des").innerHTML= "hola";
    
  }
  
  //onmouseover y onmouseout
  function mOver(obj) {
      obj.innerHTML = "Thank You"
  }
  function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
  }
  
  //onmousedown y onmouseup
  function pulsado(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function sinpulsar(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }
  
  // onfocus
  function myFunction(x) {
    x.style.background = "yellow";
  }