let elem = document.querySelector('#elem');

elem.addEventListener('blur', function(){
    elem.value = elem.value **2;
});