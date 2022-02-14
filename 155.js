let button = document.querySelector('.button');
let elem = document.querySelector('#elem');
let sibling = elem.nextElementSibling;
let nextSibling = sibling.nextElementSibling;

button.addEventListener('click', function(){
    nextSibling.innerHTML = nextSibling.innerHTML + '!'
});