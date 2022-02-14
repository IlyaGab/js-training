let button = document.querySelector('.button');
let elem = document.querySelector('#elem');
let prevSibling = elem.previousElementSibling;
let nextSibling = elem.nextElementSibling;

button.addEventListener('click', function(){
    let memory = nextSibling.innerHTML;
    nextSibling.innerHTML = prevSibling.innerHTML;
    prevSibling.innerHTML = memory;
});
