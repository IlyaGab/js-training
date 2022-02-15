let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
    let str = elem.value;
    let strReverse = elem.value.split('').reverse().join('');
    if (strReverse === str){
        elem.value = 'Polindrome';
    } else {
        elem.value = 'Not polindrome';
    };
});
