let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];

for (let key in obj){
     if (String(obj[key])[0] === '1' || (String(obj[key])[0] === '2')) {
         arr = obj[key];
         console.log(arr);
     }
     
}
