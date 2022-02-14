let elem = document.querySelector('#elem');

elem.addEventListener('click', function(){
    this.innerHTML = this.innerHTML + " " + Number(this.dataset.productPrice) * Number(this.dataset.productAmount); 
});