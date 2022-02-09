function newDate() {
	return (new Date).getDate();
};

function newMonth(){
    return (new Date).getMonth() + 1;
};

console.log(newMonth())

function newYear(){
    return (new Date).getFullYear();
};

let arr = [2023, ,16];

let [year = newYear(), month = newMonth(), day = newDate()] = arr;

console.log(year, month, day);