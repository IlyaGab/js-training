let elem = document.querySelector('#elem');

elem.addEventListener('click', function(){
    this.innerHTML = this.innerHTML + this.dataset.text;
});