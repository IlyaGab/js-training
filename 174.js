let elem = document.querySelector('.elem');
let array = [];

elem.addEventListener('blur', function(){
    array = elem.value.split(' ');
    console.log(array.length + ' ' + 'words');
});