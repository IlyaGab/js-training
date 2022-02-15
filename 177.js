let elem = document.querySelector('.elem');
let array = [];

elem.addEventListener('blur', function(){
    array = elem.value.split('');
    for(let elems of array){
        if(elems === '3'){
            elem.value = 'yes';
        } else {
            elem.value = 'no';
        };
    };
});