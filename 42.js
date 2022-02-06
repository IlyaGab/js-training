let arr = [1, 2, 3, 4, 6];

function test(array, callback){
    let arr2 = [];
    for(let i = 0; i < array.length; i++){
        arr2.push(callback(array[i], i));
    };
    return arr2;
};

let result = test(arr, (elem,index) => elem * index > 10);

console.log(result);