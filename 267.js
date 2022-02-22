let target = document.querySelector('#elem');

let text = document.createElement('p');
text.innerHTML = 'new';

target.insertAdjacentElement('beforeBegin', text);