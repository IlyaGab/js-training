let elem = document.querySelector('.elem');

elem.addEventListener('blur', function(){
    let sum = 0;
    elem.value = elem.value.split(' ')
    for (let elems of elem.value){
        sum += Number(elems);
    };
    console.log(sum);
});

