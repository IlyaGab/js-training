let func = (function(){
    let counter = 0;
    return function(){
        if(counter >= 5){
            return counter = 1;
        };
        return ++counter;
    };
})();

console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());



