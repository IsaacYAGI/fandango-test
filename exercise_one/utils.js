const subSetCalculator = (M, N) => {
    for (let i = 0;i<M.length - 1; i++){
        for (let j = i + 1; j < M.length; j++){
            if ((+M[i] + +M[j]) === +N) return [M[i],M[j]];
        }
    }
    return [0,0];
}

module.exports = { subSetCalculator }