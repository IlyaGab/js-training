let list = document.querySelector('.list');
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    let item = document.createElement('li');
    item.innerHTML = 'item' + arr[i];
    list.appendChild(item);
    item.addEventListener('click', function func(){
        this.innerHTML = this.innerHTML + '!';
        item.removeEventListener('click', func);
    });
};