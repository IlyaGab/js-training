let arr = [1, 3, 5];

function test(array, func){
    for(let i = 0; i < arr.length; i++){
        arr[i] = func(arr[i]);
    };
    return array;
};

let result = test(arr, function(num){
    return num * num * num;
});

console.log(result);