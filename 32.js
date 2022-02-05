function test(){
    let counter = 5;
    return function(){
       if (counter === 0){
            return 'Расчет окончен!';
       };
       return counter --;
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
console.log(func1());