let items = document.querySelectorAll('li');

for (let item of items) {
    let link = document.createElement('a');
    link.innerHTML = 'remove';
    link.href = '';
    item.appendChild(link);

    link.addEventListener('click', function (event) {
        item.parentElement.removeChild(item);
        event.preventDefault();
    });
};
