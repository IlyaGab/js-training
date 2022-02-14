let parent = document.querySelector('#elem');
let text = parent.firstElementChild;
let button = document.querySelector('.button');

button.addEventListener('click', function(){
   text.classList.toggle('active');
});