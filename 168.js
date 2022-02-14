let elem = document.querySelector('.elem');
let paragraph = document.querySelector('.www');

elem.addEventListener('blur', function(){
    paragraph.innerHTML = paragraph.innerHTML + " " + elem.value;
});