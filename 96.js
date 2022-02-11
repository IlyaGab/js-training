let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1 , 23, 59, 59);

let diff = now - date;

console.log(diff / 1000);