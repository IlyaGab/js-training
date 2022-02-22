let parent = document.querySelector('#parent');
let item = document.querySelector('#elem');
let newElement = document.createElement('li');
newElement.innerHTML = 'new';

parent.insertBefore(newElement, item);
