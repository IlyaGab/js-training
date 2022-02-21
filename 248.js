let list = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    let item = document.createElement('li');
    item.innerHTML = 'пункт';
    list.appendChild(item);
});
