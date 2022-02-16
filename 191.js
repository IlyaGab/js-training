let elem = document.querySelector('#elem');
let btnLock = document.querySelector('.button-lock');
let btnUnlock = document.querySelector('.button-unlock');

btnLock.addEventListener('click', function(){
    elem.checked = true;
});

btnUnlock.addEventListener('click', function(){
    elem.checked = false;
});
    
