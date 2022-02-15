let elems = document.querySelectorAll('.www');

for (let i = 0; i < elems.length; i++){
    elems[i] = elems[i].setAttribute('data-num', i + 1);
    elems[i].addEventListener('click', function func(){
        this.innerHTML = this.innerHTML + ' ' + this.dataset.num;
        elems[i].removeEventListener('click', func);
    });
};

