let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    elem.classList.toggle('active');
    if (elem.classList.contains('active')){
        this.value = 'Show';
    } else if (!elem.classList.contains('active')){
        this.value = 'Hide';
    };
});