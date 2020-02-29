const subSetCalculator2 = (arraySource, sum) => { //arraySource: Array input, sum: target
   let result = [];
   let map = {};

   for (let i = 0, size = arraySource.length; i < size; i++) {

        let actualValueArraySource = arraySource[i];
        let hashMapSearchingValue = map[sum - actualValueArraySource];
        if (hashMapSearchingValue !== undefined) {
            result[1] = actualValueArraySource;
            
            result[0] = arraySource[hashMapSearchingValue];
            return result;
        }
        
        map[actualValueArraySource] = i;
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