let date1 = new Date(2021, 11, 31, 23, 59, 59);
let date2 = new Date(2022, 8, 9, 23, 59, 59);

let diff = date2 - date1 ;

console.log(diff / (1000 * 60 * 60 * 24) + " " + "days");