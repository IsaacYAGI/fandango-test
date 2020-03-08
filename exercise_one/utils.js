const subSetCalculator = (arraySource, sum) => { //arraySource: Array input, sum: target
   let result = [];
   let map = {};

   //Recorremos el arreglo una vez completamente y mapeamos los resultados de los numeros restando
   //el valor objetivo
   for (let i = 0, size = arraySource.length; i < size; i++) {

        //Almacenamos el valor actual
        let actualValueArraySource = arraySource[i];
        
        //Consultamos si el resultado de la resta del numero enviado menos el numero actual
        //esta en el hashmap

        //De existir, ya tenemos el resultado (el numero actual y el resultado precalculado y almacenado anteriormente)
        //Devolvemos dichos valores
        if ((sum - actualValueArraySource) in map) {
            result[1] = actualValueArraySource;
            
            result[0] = arraySource[map[sum - actualValueArraySource]];
            return result;
        }
        
        //Si no existiera, ya tenemos el calculo. Almacenamos como key el resultado de la operacion y el indice
        //respecto al arreglo enviado para consultarlo posteriormente como valor del arreglo
        map[actualValueArraySource] = i;
    }
    return result;
    
}

module.exports = { subSetCalculator }