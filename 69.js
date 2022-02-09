let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, ...rest] = arr;

console.log(name, surname, rest);