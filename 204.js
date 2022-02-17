let button = document.querySelector('#button');
let select = document.querySelector('#select');
let date = new Date();

button.addEventListener('click', function(){
    select.value = date.getMonth() + 1;
});

