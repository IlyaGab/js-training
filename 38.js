let arr = [2,4,6];

function test(array, callback){
    let arr2 = [];
    for(let elems of array){
        arr2.push(callback(elems));
    };
    return arr2
};

let result = test(arr ,function(num){
    return num * 2;
});

console.log(result);
