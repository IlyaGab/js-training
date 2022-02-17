let button = document.querySelector('.button');
let select = document.querySelector('#select');

button.addEventListener('click', function(){
   let option = select.lastElementChild;
   option.selected = true;
});
