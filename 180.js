let elems = document.querySelectorAll('.elem');

for(let elem of elems){
    elem.addEventListener('click', function(){
        this.innerHTML = Number(this.innerHTML) **2;
    });
};