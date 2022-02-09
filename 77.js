function func([name, surname, department, position = 'джуниор']){
    console.log(name, position);
};

func( ['Иван', 'Иванов', 'отдел разработки'] );