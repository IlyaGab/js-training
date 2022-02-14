let elems = document.getElementsByTagName('div');

for (let elem of elems){
    elem.addEventListener('click', function(){
        this.innerHTML = this.innerHTML + " " + this.dataset.num;
    });
}