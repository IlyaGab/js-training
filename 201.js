let select = document.querySelector('#select');
let button = document.querySelector('.button');
let text = document.querySelector('.text');

button.addEventListener('click', function(){
    text.innerHTML = select.value;
});