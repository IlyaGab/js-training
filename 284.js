let array = [1, 2, 'Dog', 5, 6, 15];
let list = document.querySelector('ul');
for(let i = 0; i < array.length; i++){
    let item = document.createElement('li');
    item.innerHTML = array[i];
    list.append(item);
};