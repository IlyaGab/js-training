let link = document.querySelector('.link');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    link.innerHTML = link.innerHTML + '(' + link.href + ')';
});