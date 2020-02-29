const subSetCalculator2 = (arraySource, sum) => { //arraySource: Array input, sum: target
   let result = [];
   let map = {};

   for (let i = 0, size = arraySource.length; i < size; i++) {

        let actualValueArraySource = arraySource[i];
        
        if ((sum - actualValueArraySource) in map) {
            result[1] = actualValueArraySource;
            
            result[0] = arraySource[map[sum - actualValueArraySource]];
            return result;
        }
        
        map[actualValueArraySource] = i;
    }
    return result;
    
}

const subSetCalculator = (arraySource, sum) => {
    for (let i = 0;i<arraySource.length - 1; i++){
        for (let j = i + 1; j < arraySource.length; j++){
            if ((+arraySource[i] + +arraySource[j]) === +sum) return [arraySource[i],arraySource[j]];
        }
    }
    return [0,0];
}


module.exports = { subSetCalculator, subSetCalculator2 }