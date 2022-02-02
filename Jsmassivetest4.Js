let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [1, 2, 3, 4, 5]
let obj = {};

for(let key in arr){
    obj[arr2[key]] = arr[key]; 
    
    }
    console.log(obj)
    

    
