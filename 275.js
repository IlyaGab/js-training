let elems = document.querySelectorAll('p');

for(let elem of elems){
    let span = document.createElement('span');
    let nodes = elem.childNodes
    for( let node of nodes){
        node.parentNode.insertBefore(span, node);
        span.appendChild(node);
    };
    let link = document.createElement('a');
    link.innerHTML = 'remove';
    link.href = '';
    span.insertAdjacentElement('afterEnd', link);
    link.addEventListener('click', function(event){
        span.innerHTML = '';
        event.preventDefault();
    });
    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = span.innerHTML;
        span.innerHTML = '';
        span.appendChild(input);
        input.addEventListener('blur', function () {
            span.innerHTML = this.value;
            span.addEventListener('click', func);
        });
        span.removeEventListener('click', func);
    });
};

