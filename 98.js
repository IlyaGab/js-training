let now = new Date();
let date = new Date(now.getFullYear(), 11, 31, 23, 59, 59);

let diff = date - now;

console.log(diff / (1000 * 60 * 60 * 24));

