let button = document.querySelector('.button');
let elem = document.querySelector('#elem');
let parent = elem.parentElement;

button.addEventListener('click', function(){
    parent.classList.toggle('active');
});