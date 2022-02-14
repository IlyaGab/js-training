let elems = document.querySelectorAll('#elem');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    for (let elem of elems) {
        elem.classList.toggle('active');
    };
});