let parent = document.querySelector('#parent');
let child = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    parent.removeChild(child);
});