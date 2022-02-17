let select = document.querySelector('#select');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    console.log(select[select.selectedIndex].text);
});

