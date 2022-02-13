let elems = document.querySelectorAll('.www');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    for(let elem of elems){
    elem.innerHTML = 'text';
    };
});
