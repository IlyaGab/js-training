let list = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    for(let i = 1; i <11; i++){
        let item = document.createElement('li');
        item.innerHTML = 'Пункт' + i;
        list.appendChild(item);
    };
});    