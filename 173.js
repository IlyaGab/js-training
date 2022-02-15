let elem = document.querySelector('.elem');

elem.addEventListener('blur', function(){
    let array = [];
    let array2 = [];
    let result = '';
    array = elem.value.split(' ');
    for(let i = 0; i < array.length; i++){
        result = array[i][0].toUpperCase() + array[i].slice([1]);
        array2.push(result);
        elem.value = array2.join(' ');
    }; 
});