let arr = [1, 3, 4, 5, 6];
let elemSquare = 0;

arr.forEach(function(elem){
    elemSquare += elem ** 2;
});

console.log(elemSquare);