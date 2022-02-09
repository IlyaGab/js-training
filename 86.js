let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();

console.log(diff / (1000 * 60 * 60 * 24 * 12 ) + " " + "month");