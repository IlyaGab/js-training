let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function test(array, callback){
    let arr2 = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            arr2.push(callback(array[i][j], j));
        };
    };
    return arr2;
};

let result = test(arr, (elem,index) => elem * index > 10);

console.log(result);