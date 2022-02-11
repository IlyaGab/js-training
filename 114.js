let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let element1 = document.querySelector('.elem1');
let element2 = document.querySelector('.elem2');

button1.addEventListener('click', function(){
    console.log(element1.innerHTML);
});

button2.addEventListener('click', function(){
    console.log(element2.innerHTML);
});