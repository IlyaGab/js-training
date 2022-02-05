function test(){
    let counter = 1;
    return function(){
       return counter++;
    };
};
 
let func1 = test();

console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());

let func2 = test();

console.log(func2());
console.log(func2());
console.log(func2());
console.log(func1());