let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let element1 = document.querySelector('.elem1');

button1.addEventListener('click', function(){
    element1.innerHTML = 'Hello!';
});

button2.addEventListener('click', function(){
    element1.innerHTML = 'Bye!';
});