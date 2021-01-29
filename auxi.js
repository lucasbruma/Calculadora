var ordenar = require("./ordenamiento.js");

function evaluarOperacion(textoAEvaluar) {

  var posicionDelSimbolo = [];
  var posicionDelSimbolo2 = [];  
  var partes = [];
  var partes2 = [];
  var simbolos = [];
  var simbolos2 = [];
  var i=0;
  var z=0;
  var j=0;
  var f=0;
  var idx = 0;
  var idz = 0;
  var idm = 0;
  var idd = 0;
  var soloResta = 0;
  var soloDiv = 0;
  var encontro=1;
  var identific, identific2;
  var identificador = [];
  
  /* while para identificar la ubicacion de los 
  simbolos y asignarlos a un array. */

  //SEPARACION DE TERMINOS + y -

  while (idx != -1 || idz != -1){
    // +
    if(soloResta == 0){
    idx = textoAEvaluar.indexOf("+",idx+1);
      if(idx != -1){
        posicionDelSimbolo.push(idx);
      }
    }
    //-  
    // el siguiente if compara si en el texto ya no se encontraron más signos +.
    if(idx == -1){
      idz = textoAEvaluar.indexOf("-",idz+1);
      
      if (idz != -1 && idz != 0){
      posicionDelSimbolo.push(idz);
      idx = -1;
      soloResta = 1;
    } 
    }
    var ordenado = ordenar.ordenarArray(posicionDelSimbolo); //ordenamiento por orden de aparicion de los simbolos 
  }

  // for para asignar las partes a un array y revisarlas.
  for (i=0;i<ordenado.length+1;i++){
    if(i==0){
      partes[i] = textoAEvaluar.slice(0,ordenado[i]);
    }else{
      partes[i] = textoAEvaluar.slice(ordenado[i-1]+1,ordenado[i]);
    } 
    identific = partes[i].indexOf("*");
    identific2 = partes[i].indexOf("/");
    if(identific != -1 || identific2 != -1){
      identificador[f] = i;
      f++;
    }
  }
  
  // for para asignar simbolos + - a un array
  for(i=0;i<ordenado.length;i++){
    simbolos[i] = textoAEvaluar[ordenado[i]];
  }

  // while para asignar posiciones de los simbolos a un array.
  while (idm != -1 || idd != -1){
    // *
    if(soloDiv == 0){
    idm = textoAEvaluar.indexOf("*",idm+1);

    if(idm != -1){
        posicionDelSimbolo2.push(idm);
     }
    }
    
    // /  
    if(idm == -1){
      idd = textoAEvaluar.indexOf("/",idd+1);
      
      if (idd != -1 && idd != 0){
      posicionDelSimbolo2.push(idd);
      idm = -1;
      soloDiv = 1;
    } 
    }
    var ordenado2 = ordenar.ordenarArray(posicionDelSimbolo2);
  }

  // for para asignar las subpartes a un array. Varias condiciones. 
  while (encontro == 1){

      if(z==0 && ordenado[z]>ordenado2[z]){
        partes2[j] = textoAEvaluar.slice(0,ordenado2[z]);
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1,ordenado[z]);
        j=j+2;
        encontro=1;
      }else if(z==0 && ordenado[z]<ordenado2[z] && ordenado[z+1]>ordenado2[z]){
        partes2[j] = textoAEvaluar.slice(ordenado[z]+1,ordenado2[z])
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1,ordenado[z+1])
        j=j+2;
      }else if(ordenado[z]<ordenado2[z] && ordenado[z+1]==undefined){
        partes2[j] = textoAEvaluar.slice(ordenado[z]+1,ordenado2[z])
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1)
        j=j+2;
      }else if(z!=0 && ordenado[z-1]<ordenado2[z] && ordenado[z]>ordenado2[z]){
        partes2[j] = textoAEvaluar.slice(ordenado[z-1]+1,ordenado2[z])
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1,ordenado[z])
        j=j+2;
      } else if(z!=0 && ordenado[z]<ordenado2[z]){
        partes2[j] = textoAEvaluar.slice(ordenado[z]+1,ordenado2[z])
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1, ordenado[z+1])
        j=j+2;
        encontro=1;
      }
      
      if(ordenado[z-1]<ordenado2[z] && ordenado[z]==undefined){
        partes2[j] = textoAEvaluar.slice(ordenado[z-1]+1,ordenado2[z])
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1)
        j=j+2;
      }

      if(z==0 && ordenado[z]==undefined){
        partes2[j] = textoAEvaluar.slice(0,ordenado2[z])
        partes2[j+1] = textoAEvaluar.slice(ordenado2[z]+1)
        j=j+2;
      }
      
      if (z==ordenado.length){
        encontro=0;
      }else{
        encontro=1;
      }
      z++;
}
   
  // for para asignar simbolos * / a un array
  for(i=0;i<posicionDelSimbolo2.length;i++){
    simbolos2[i] = textoAEvaluar[ordenado2[i]];
  }

  //pasando subdivisiones (* y /) a int.
  for(i=0;i<partes2.length;i++){
    partes2[i] = parseInt(partes2[i])
  }

    return {
      numeros: partes2, 
      terminos: partes,
      operacionTer: simbolos,
      operacion: simbolos2,
      identificador: identificador,
    };
  }
  
  module.exports = {
    evaluarOperacion: evaluarOperacion,
  };

  
