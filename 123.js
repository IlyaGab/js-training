let image = document.querySelector('.image');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    image.width = image.width * 2;
});