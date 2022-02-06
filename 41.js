let arr = [1, 2, 3, 4, 6];

function test(array, callback){
    let arr2 = [];
    for(let elems of array){
        arr2.push(callback(elems));
    };
    return arr2;
};

let result = test(arr, elem => elem % 2 === 0);

console.log(result);
