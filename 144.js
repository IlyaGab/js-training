let elems = document.querySelectorAll('.elem');

for(let elem of elems){
    elem.addEventListener('click', func);
};

function func(){
    this.innerHTML = this.innerHTML + '!';
    this.removeEventListener('click', func);
};