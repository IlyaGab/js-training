let elem = document.querySelector('.elem');
let surname = document.querySelector('.elem1');
let name = document.querySelector('.elem2');
let patronymic = document.querySelector('.elem3');

elem.addEventListener('blur', function(){
    let array = [];
    array = elem.value.split(' ');
    for(let i = 0; i < array.length; i++){
        surname.value = array[0];
        name.value = array[1];
        patronymic.value = array[2];
    };
});