let elem = document.querySelector('#elem');

elem.addEventListener('blur', function(){
    let timerId = setInterval(function(){
        elem.value = Number(elem.value) - 1;
        if(Number(elem.value) === 0) {
            clearInterval(timerId);
        };
    }, 1000);
});
