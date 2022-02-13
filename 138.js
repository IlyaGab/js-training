let elems = document.querySelectorAll('.www');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    for (let i = 0; i < elems.length; i++){
        elems[i].innerHTML = elems[i].innerHTML + [i+1];
    };
});