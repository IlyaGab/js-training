let link = document.querySelector('.link');
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    elem.innerHTML = link.href;
});