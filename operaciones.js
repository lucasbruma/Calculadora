var i = 0
var z = 0
var j = 0;
var f = 0;
var resultado = []
var partess=[]
var resultadoFinal = 0;

// multiplico y divido los terminos que poseen dichos simbolos
function ejecutarOperacion(objetoOperacion) {

  for(z=0;z<objetoOperacion.operacion.length;z++){
   if(objetoOperacion.operacion[z] == "*") {
     if(objetoOperacion.operacion.length<=1){
       resultadoFinal = multi(objetoOperacion.numeros);
     }else{
       resultado[z] = multi(objetoOperacion.numeros);
     }
  } else if(objetoOperacion.operacion[z] == "/") {
      if(objetoOperacion.operacion.length<=1){
        resultadoFinal = dividir(objetoOperacion.numeros)
    }else{
      resultado[z] = dividir(objetoOperacion.numeros);
    }
  } 
  }

  function multi(numeros) {
    resultado[j] = numeros[i] * numeros[i+1];
    i=i+2;
    j++;
    return resultado[j-1]
  }

  function dividir(numeros) {
    resultado[j] = numeros[i] / numeros[i+1];
    i=i+2;
    j++;
    return resultado[j-1]
  }

  return resultado 
}

function ordenarTerminos(objetoOperacion, resultaditos){

  //reemplazo el resultado de las * y / en el array principal
  for(i=0;i<objetoOperacion.terminos.length;i++){
   objetoOperacion.terminos[objetoOperacion.identificador[i]] = resultaditos[i]
   partess[i] = objetoOperacion.terminos[i]
  }

  //paso a entero los numeros que estan como texto
  for(i=0;i<partess.length;i++){
    if(typeof(partess[i]) == "string"){
      partess[i] = parseInt(partess[i])
    }
  }
  return partess
}
   
// sumo todo finalmente

function sumarTerminos(objetoOperacion, terminos){

  for(z=0;z<objetoOperacion.operacionTer.length;z++){
    if(objetoOperacion.operacionTer[z] == "+") {
     resultadoFinal = sumar(terminos);
   } else if(objetoOperacion.operacionTer[z] == "-") {
     resultadoFinal = restar(terminos);
   } else if(objetoOperacion.operacionTer[z] == undefined){

   }
   }

  function sumar(numeros) {
    if(z==0){
      resultadoFinal = numeros[f] + numeros[f+1];
      f=f+2;
    }else{
      resultadoFinal = resultadoFinal + numeros[f];
      f++; 
    }
    return resultadoFinal
  }  

  function restar(numeros) {
    if(z==0){
      resultadoFinal = numeros[f] - numeros[f+1];
      f=f+2;
    }else{
      resultadoFinal = resultadoFinal - numeros[f];
      f++;
    }
    return resultadoFinal
  }
  return resultadoFinal
}
 
  module.exports = {
    ejecutarOperacion: ejecutarOperacion,
    ordenarTerminos: ordenarTerminos,
    sumarTerminos: sumarTerminos,
  };