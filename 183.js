let elem = document.querySelector('.elem');
let paragraps = document.querySelectorAll('.www');
let sum = 0;
for(let paragraph of paragraps){
    paragraph.addEventListener('click', function(){
        sum += 1;
        elem.value = sum;
    });
};