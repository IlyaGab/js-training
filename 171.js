let elem = document.querySelector('.elem');

elem.addEventListener('blur', function(){
    let sum = 0;
    let array = [];
    array = elem.value.split(',');
    for (let i = 0; i < array.length; i++){
       sum += array[i] / array.length;
    };
    console.log(sum);
});