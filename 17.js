let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};

let sum = 0;
for (let elem in obj){
    sum += obj[elem]();
};

console.log(sum);

