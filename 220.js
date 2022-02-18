let list = document.querySelector('ul');
let button = document.querySelector('button');


list.addEventListener('click', function(event) {
    event.target.innerHTML = event.target.innerHTML + '!';
});

button.addEventListener('click', function(event){
    let item = document.createElement('li');
    item.innerHTML = 'item';
    list.appendChild(item);
});