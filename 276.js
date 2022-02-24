let elems = document.querySelectorAll('p');

for (let elem of elems) {
    let span = document.createElement('span');
    let nodes = elem.childNodes
    for (let node of nodes) {
        node.parentNode.insertBefore(span, node);
        span.appendChild(node);
    };
    let link = document.createElement('a');
    link.innerHTML = 'add decoration';  
    link.href = '';
    span.insertAdjacentElement('afterEnd', link);
    link.addEventListener('click', function (event) {
        span.classList.toggle('active');
        event.preventDefault();
    });
};