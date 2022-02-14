let button = document.querySelector('.button');
let elem = document.querySelector('#elem');
let parent = elem.parentElement;
let parentOfParent = parent.parentElement;

button.addEventListener('click', function(){
    parentOfParent.classList.toggle('div-active');
});