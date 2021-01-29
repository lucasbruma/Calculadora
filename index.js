var aux = require("./auxi");
var operaciones = require("./operaciones");

var operacionAEvaluar = process.argv[2];
var objetoOperacion = aux.evaluarOperacion(operacionAEvaluar);
var resultaditos = operaciones.ejecutarOperacion(objetoOperacion);
var terminos = operaciones.ordenarTerminos(objetoOperacion,resultaditos);
var resultadoFinal = operaciones.sumarTerminos(objetoOperacion,terminos)

console.log(resultadoFinal);
