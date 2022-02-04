let arr = [1, 2, 3];

let math = {
    sumOfArr: function(array) {
        let sumElems = 0;
        for (let elems of array){
            sumElems += elems;
        };
        return sumElems;
    },
    sumOfSquare: function(array){
        let sumElemsSquare = 0;
        for (let elems of array){
            sumElemsSquare += elems * elems;
        };
        return sumElemsSquare;
    },
    sumOfCube: function(array){
        let sumElemsCube = 0;
        for (let elems of array){
            sumElemsCube += elems * elems * elems;
        };
        return sumElemsCube;
    },
};

console.log(math.sumOfArr(arr), math.sumOfSquare(arr), math.sumOfCube(arr));