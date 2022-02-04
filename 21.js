let get1 = function(){
    return 1;
};

let get2 = function(){
    return 3;
};

let get3 = function(){
    return 5;
};

function test(func1, func2, func3){
    return func1() * func2() * func3();
}

console.log(test(get1, get2, get3));