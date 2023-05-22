
function encriptarTexto(texto){
  var resultado = "";
  for (var i = 0; i < texto.length; i++){
    var letra = texto.charAt(i);

    if (letra === "a"){
      resultado += "ai";
    
    }else if(letra === "e"){
      resultado += "enter";
     
    }else if (letra === "i"){
      resultado += "imes";
      
    }else if (letra === "o"){
      resultado += "ober";
      
    }else if (letra === "u"){
      resultado += "ufat";
      
    }else{
      resultado += letra;
    }
  }
  return resultado;
}


function desEncriptarTexto(texto) {
  var palabras = "";
  for (var i = 0; i < texto.length; i++){
    var letra = texto.charAt(i);

    if (letra === "a" && texto.charAt(i+1) === "i"){
      palabras += "a";
      i += 1;

    }else if (letra === "e" && texto.charAt(i+1) === "n" && texto.charAt(i+2) === "t" && texto.charAt(i+3) === "e" && texto.charAt(i+4) === "r"){
      palabras += "e";
      i += 4;

    }else if (letra === "i" && texto.charAt(i+1) === "m" && texto.charAt(i+2) === "e" && texto.charAt(i+3) === "s"){
      palabras += "i";
      i += 3;

    }else if (letra === "o" && texto.charAt(i+1) === "b" && texto.charAt(i+2) === "e" && texto.charAt(i+3) === "r"){
      palabras += "o";
      i += 3;

    }else if (letra === "u" && texto.charAt(i+1) === "f" && texto.charAt(i+2) === "a" && texto.charAt(i+3) === "t"){
      palabras += "u";
      i += 3;

    }else{
      palabras += letra;
    }
  }
  return palabras;
}

//lee el texto de mi primer texarea
function leerTexto() {
  const miTexto = document.getElementById("miTexto").value;
  return miTexto;
}

//encripta el texto
function cambioTexto(){
  const cambioTexto = document.getElementById("cambioDeTexto");
  const cambio = encriptarTexto(leerTexto());
  cambioTexto.innerHTML= cambio;
  }

//desencripta el texto
function cambioTexto2(){
  const cambioTexto = document.getElementById("cambioDeTexto");
  const cambio = desEncriptarTexto(leerTexto());
  cambioTexto.innerHTML= cambio;
  
  }

//copia el texto del segundo texarea 
function copiarTexto(){
  const texto = document.getElementById("cambioDeTexto").value;
  navigator.clipboard.writeText(texto);
  document.getElementById("miTexto").value = "";
}

//bloquea el segundo texarea
function bloquearTexarea(){
  const bloquear = document.getElementById("cambioDeTexto");
  bloquear.readOnly = true;
}

function bloquearTildes(element) {
  element.addEventListener('input', function() {
    const sinTildes = element.value.replace(/[áéíóú]/g, '');
    element.value = sinTildes;
  });
}
function bloqueoTil(){
  const tilde = document.getElementById("miTexto");
  bloquearTildes(tilde);
}

function bloquearCaracteresEspeciales(element) {
  element.addEventListener('input', function() {
    const sinCaracteres = element.value.replace(/[^\w\s]/g, '');
    element.value = sinCaracteres;
  });
}
function bloqueoCarac(){
  const caracter = document.getElementById("miTexto");
  bloquearCaracteresEspeciales(caracter);
}

//se activan al iniciar la pagina
window.onload = function() {
  bloquearTexarea();
  bloqueoCarac();
  bloqueoTil();
}


function convertirMinusculas(element) {
  element.value = element.value.toLowerCase();
}



