let elem = document.querySelector('.elem');

elem.addEventListener('blur', function(){
    if(Number(elem.value) > 0 && Number(elem.value) < 101){
        elem.classList.remove('inactive');
        elem.classList.add('active');
    } else {
        elem.classList.remove('active');
        elem.classList.add('inactive');
    };     
});