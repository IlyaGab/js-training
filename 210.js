let select = document.querySelector('#select');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    select[select.selectedIndex].text = select[select.selectedIndex].text + "!";
});