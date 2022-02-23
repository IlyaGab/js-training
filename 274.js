let elems = document.querySelectorAll('p');
let spans = document.querySelectorAll('span');

for (let span of spans) {
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