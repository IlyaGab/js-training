let button = document.querySelector('#button');
let text = document.querySelector('.text');

button.addEventListener('click', function(){
    let timerId = setInterval(function(){
        text.innerHTML = Number(text.innerHTML) - 1;
        if(Number(text.innerHTML) === 0){
            clearInterval(timerId);
        };
    }, 1000);
});