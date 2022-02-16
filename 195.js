let elem = document.querySelector('.elem');
let text = document.querySelector('.text');

elem.addEventListener('change', function(){
    text.innerHTML = elem.value;
});