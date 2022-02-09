let myBirthday = new Date(1994, 4, 6);
let nowDate = new Date();
let diff = nowDate.getTime() - myBirthday.getTime();

console.log(diff / (1000 * 60 * 60 * 24 * 30.5) + " " + "month");