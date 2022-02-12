let image = document.querySelector('.image');
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    elem.innerHTML = image.src;
});