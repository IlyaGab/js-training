let button = document.querySelector('.button');
let elem = document.querySelector('#elem');
let sibling = elem.nextElementSibling;

button.addEventListener('click', function(){
    sibling.innerHTML = sibling.innerHTML + '!'
});