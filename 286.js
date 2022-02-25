let array = [1, 2, 'Dog', 5, 6, 15];
let list = document.querySelector('ul');
let inputOfList = document.createElement('input');


for (let i = 0; i < array.length; i++) {
    let item = document.createElement('li');
    item.innerHTML = array[i];
    list.append(item);
    item.addEventListener('click', function func() {
        let input = document.createElement('input');
        item.innerHTML = '';
        item.appendChild(input);
        input.addEventListener('blur', function () {
            item.innerHTML = this.value;
            item.addEventListener('click', func);
            if (item.innerHTML === '') {
                item.innerHTML = array[i];
            };
        });
        item.removeEventListener('click', func);
    });
};



inputOfList.addEventListener('blur', function () {
    let newItem = document.createElement('li');
    newItem.innerHTML = this.value;
    list.appendChild(newItem);
    if (this.value === '') {
        list.removeChild(newItem);
    };
    newItem.addEventListener('click', function func() {
        let input = document.createElement('input');
        newItem.innerHTML = '';
        newItem.appendChild(input);
        input.addEventListener('blur', function () {
            newItem.innerHTML = this.value;
            newItem.addEventListener('click', func);
        });
        newItem.removeEventListener('click', func);
    });
});

list.appendChild(inputOfList);