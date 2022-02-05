function func (num1, num2){
    return square(num1) + cube(num2);
};

console.log(func(2,3));

function square(num){
    return num ** 2;
};

function cube(num){
    return num ** 3;
};