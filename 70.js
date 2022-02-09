let arr = ['Иван', 'Иванов', 'отдел разработки'];
let[name, surname, department, position = 'джуниор'] = arr;

console.log(name, position);