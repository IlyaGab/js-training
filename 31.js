function test(){
    let counter = 10;
    return function(){
       return counter--;
    };
};
 
let func1 = test();

console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());