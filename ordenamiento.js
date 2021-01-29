function ordenarArray(lista){
    var n, i, k, aux;
    var n = lista.length;
    
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
   return lista
}

module.exports = {
    ordenarArray: ordenarArray,
  };
  