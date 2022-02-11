let button = document.querySelector('.button1');
let element = document.querySelector('.elem1');

button.addEventListener('click', function(){
   element.innerHTML = (element.innerHTML * 1) * (element.innerHTML * 1);
});