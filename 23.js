function test(getSumm){
    return getSumm(33, 4);
 };
 
 let func = function (num1,num2){
     return num1 + num2;
 };
 console.log(test(func));
 