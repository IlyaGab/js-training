let radios = document.querySelectorAll('.elem');
let button = document.querySelector('.button');
let paragraph = document.querySelector('.paragraph');

button.addEventListener('click', function(){
    for(let radio of radios){
        if(radio.checked){
            paragraph.innerHTML = radio.value;
        };
    };
});