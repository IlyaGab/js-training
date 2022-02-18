let elems = document.querySelectorAll('.elem');
let link = document.querySelector('.link');
let text = document.querySelector('.text');

link.addEventListener('click', function(event){
    event.preventDefault();
    let sum = 0;
    for (let elem of elems){
        sum += Number(elem.value);
        text.innerHTML = sum;
    };
});