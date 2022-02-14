let elems = document.getElementsByClassName('www');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    for(let elem of elems){
        elem.classList.toggle('active');
    };
});