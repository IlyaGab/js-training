let elem = document.querySelector('#elem');
let text = document.querySelector('.text');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    let result = elem.value;
    let timerId = setInterval(() => {
        text.innerHTML = result--;
        if(Number(text.innerHTML) === 0){
            clearInterval(timerId);
        };
    }, 1000);
});