let elem = document.querySelector('.elem');
let array = [];

console.log(elem.value)
elem.addEventListener('blur', function(){
    elem.value = elem.value.split('.').reverse().join('-');
});