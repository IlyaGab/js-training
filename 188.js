let elem = document.querySelector('.elem');
let paragraph = document.querySelector('.paragraph');

elem.addEventListener('blur', function(){
    paragraph.innerHTML = elem.value;
});