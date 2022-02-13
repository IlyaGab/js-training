let button = document.querySelector('.button');

button.addEventListener('click', func);

function func(){
    button.value = Number(button.value) + 1;
    if(Number(button.value) === 10){
        button.removeEventListener('click', func);
    };
};