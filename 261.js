let parent = document.querySelector('#parent');
let button = document.querySelector('#button');
let items = document.querySelectorAll('li');

button.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerHTML = 'new';
    item.addEventListener('click', function () {
        this.remove()
    });
    parent.appendChild(item);
});

for (let firstItem of items) {
    firstItem.addEventListener('click', function () {
        this.remove();
    });
};

