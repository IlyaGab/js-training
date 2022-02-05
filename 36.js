let func = (function(){
    let counter = 0;
    return function(){
        return counter++;
    };
})();

console.log(func());
console.log(func());
console.log(func());
console.log(func());