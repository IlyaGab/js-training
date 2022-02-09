function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let arr = func();
let [name, surname, department, profession, year] = func();

console.log(name, surname, year, profession);