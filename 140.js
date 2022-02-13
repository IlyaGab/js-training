let elems = document.querySelectorAll('.elem');

for(let elem of elems){
    elem.addEventListener('blur', func);
};

function func(){
    this.value = Number(this.value) + 1;
};