let image = document.querySelector('.image');
let button = document.querySelector('.button');
let button1 = document.querySelector('.button1');

button.addEventListener('click', function(){
    image.src = './svg/vector-hover.svg';
});

button1.addEventListener('click', function(){
    image.src = './svg/carbon_moon-hover.svg';
});