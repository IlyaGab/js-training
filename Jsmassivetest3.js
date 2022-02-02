let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
arr1 = [];
arr2 = [];

for(let key in obj){
    arr1 = [key];
    arr2 = obj[key];
    console.log(arr1 );
}
