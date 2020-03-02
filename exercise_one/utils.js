const subSetCalculator2 = (arraySource, sum) => { //arraySource: Array input, sum: target
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
        //Devolvemos dicho valor
        if ((sum - actualValueArraySource) in map) {
            result[1] = actualValueArraySource;
            
            result[0] = arraySource[map[sum - actualValueArraySource]];
            return result;
        }
        
        //Si no existiera, ya tenemos ese valor. Almacenamos el valor y el indice
        //respecto al arreglo enviado para consultarlo posteriormente
        map[actualValueArraySource] = i;
    }
    return result;
    
}

const subSetCalculator = (arraySource, sum) => {
    //Recorremos el arreglo comparando cada uno de los numeros
    // hasta el final
    for (let i = 0;i<arraySource.length - 1; i++){
        for (let j = i + 1; j < arraySource.length; j++){
            //Si encuentra el par de numeros que sumados den el numero buscado, se retorna inmediatamente
            if ((+arraySource[i] + +arraySource[j]) === +sum) return [arraySource[i],arraySource[j]];
        }
        //Sino se pasa al siguiente valor y se realizan las operaciones de comprobacion
    }
    return [0,0];
}


module.exports = { subSetCalculator, subSetCalculator2 }