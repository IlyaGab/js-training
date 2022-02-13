let elems = document.querySelectorAll('.elem');
let paragraph = document.querySelector('.www');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    let sum = 0;
    for(let elem of elems){
        sum += elem.value * 1;
        paragraph.innerHTML = sum;
    };
});