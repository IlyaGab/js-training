let elems = document.querySelectorAll('.www');

for(let elem of elems){
    elem.innerHTML = elem.innerHTML.slice(0, 10) + '...';
};