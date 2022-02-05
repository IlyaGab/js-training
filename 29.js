let arr = [];

function func(num1) {
	return function(num2) {
		return function (num3){
            return function (num4){
                return function(){
                    arr.push(num1, num2, num3, num4);
                    return arr;
                };
            };
        };
	};
};

console.log(func(1)(2)(3)(4)());