let list = document.querySelector('.list');
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    let item = document.createElement('li');
    item.innerHTML = 'item' + arr[i];
    list.appendChild(item);
};