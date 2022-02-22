let parent = document.querySelector('.parent')
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let clone = elem.cloneNode(true);

button.addEventListener('click', function(){
    parent.appendChild(clone);
});