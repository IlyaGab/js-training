let elem = document.querySelector('#elem');
let text = document.querySelector('.text');

elem.addEventListener('blur', function(){
    let result = elem.value;
    let timerId = setInterval(function(){
        text.innerHTML = result--;
        if(Number(text.innerHTML) === 0){
            clearInterval(timerId);
        };
    }, 1000);
});