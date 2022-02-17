let select = document.querySelector('#select');
let elem = document.querySelector('.elem');

elem.addEventListener('blur', function(){
    select.selectedIndex = Number(elem.value - 1);
});