let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];

let sum = 0;
for (let func of arr){
    sum  += func();
};
console.log(sum);