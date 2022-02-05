let arr = ['string', 'string', 'string'];

function test(array, callback){
    let arr2 = [];
    for(let elems of array){
        arr2.push(callback(elems));
    };
    return arr2
};

let result = test(arr, function(str){
    return str[0].toUpperCase() + str.slice(1);
});

console.log(result);