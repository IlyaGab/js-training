function get1(){
    return 1;
};
   
function get2(){
    return 3;
};
   
function get3(){
    return 5;
};
   
function test(func1, func2, func3){
    return func1() + func2() + func3();
};

console.log(test(get1, get2, get3));