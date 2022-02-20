let elem = document.querySelector('#elem');
let text = document.querySelector('.text');

elem.addEventListener('blur', function(){
    let timerId = setInterval(function(){
        text.innerHTML = elem.value--;
        if(Number(text.innerHTML) === 0){
            clearInterval(timerId);
        };
    }, 1000);
});