const subSetCalculator2 = (arraySource, sum) => { //arraySource: Array input, sum: target
   let result = [];
   let map = {};

   for (let i = 0; i < arraySource.length; i++) {
        
        //if ((sum - arraySource[i]) in map) {
            //console.log((sum - arraySource[i]) in map);
        if ((sum - arraySource[i]) in map) {
            result[1] = arraySource[i];
            
            result[0] = map[sum - arraySource[i]];
            return result;
        }
        
        map[arraySource[i]] = arraySource[i];
        //console.log("Map actual:", map);
    }
    return result;
    
}

const subSetCalculator = (M, N) => {
    for (let i = 0;i<M.length - 1; i++){
        for (let j = i + 1; j < M.length; j++){
            if ((+M[i] + +M[j]) === +N) return [M[i],M[j]];
        }
    }
    return [0,0];
}


module.exports = { subSetCalculator, subSetCalculator2 }