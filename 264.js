let parent = document.querySelector('#elem');

let pFirst = document.createElement('li');
pFirst.innerHTML = 'start';

let pLast = document.createElement('li');
pLast.innerHTML = 'finish';

parent.prepend(pFirst);
parent.append(pLast);
