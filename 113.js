let button = document.querySelector('.button');
let element1 = document.querySelector('.elem1');
let element2 = document.querySelector('.elem2');

button.addEventListener('click', function(){
    console.log(element1.innerHTML * 1 + element2.innerHTML * 1);
});