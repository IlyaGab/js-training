let elem = document.querySelector('.elem');
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let array = [];

elem.addEventListener('blur', function(){
    array = elem.value.split('-'); 
    let date = new Date(array);
    let dayOfWeek = date.getDay();
    console.log(days[dayOfWeek]);
});