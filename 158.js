let elems = document.getElementsByTagName('li');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    for(let elem of elems){
    elem.classList.toggle('active');
    };
});
