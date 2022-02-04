function test(getCube){
   return getCube(3);
};

let func = function (num){
    return num * num * num;
};
console.log(test(func));

