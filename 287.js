let array = [1, 2, 'Dog', 5, 6, 15];
let list = document.querySelector('ul');
let inputOfList = document.createElement('input');


for (let i = 0; i < array.length; i++) {
    let item = document.createElement('li');
    item.innerHTML = array[i];
    list.append(item);
    let link = document.createElement('a');
    link.innerHTML = 'remove';
    link.href = '';
    item.append(link);
    link.addEventListener('click', function delElem(event) {
        list.removeChild(item);
        event.preventDefault();
    });

    item.addEventListener('click', function func() {
        let input = document.createElement('input');
        item.innerHTML = '';
        item.appendChild(input);
        item.appendChild(link);
        input.addEventListener('blur', function () {
            item.innerHTML = this.value;
            item.appendChild(link);
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
    let newLink = document.createElement('a');
    newItem.innerHTML = this.value;
    newLink.innerHTML = 'remove';
    newLink.href = '';
    newItem.append(newLink);
    list.appendChild(newItem);
    newLink.addEventListener('click', function (event) {
        list.removeChild(newItem);
        event.preventDefault();
    });
    if (this.value === '') {
        list.removeChild(newItem);
    };
    newItem.addEventListener('click', function newFunc() {
        let inputOfNewItems = document.createElement('input');
        newItem.innerHTML = '';
        newItem.appendChild(inputOfNewItems);
        newItem.append(newLink);
        inputOfNewItems.addEventListener('blur', function () {
            newItem.innerHTML = this.value;
            newItem.append(newLink);
            newItem.addEventListener('click', newFunc);
        });
        newItem.removeEventListener('click', newFunc);
    });
});

list.appendChild(inputOfList);