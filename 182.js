let elem = document.querySelector('.elem');
let buttonPlus = document.querySelector('.button1');
let buttonMinus = document.querySelector('.button2');

buttonPlus.addEventListener('click', function(){
    elem.value = Number(elem.value) + 1;
});

buttonMinus.addEventListener('click', function func(){
    elem.value = Number(elem.value) - 1;
    if (elem.value <= 0){
        elem.value = 0;
    };
});