let button = document.querySelector('.button');
let element = document.querySelector('#elem');

button.addEventListener('click', function(){
    console.log(element.innerHTML);
});