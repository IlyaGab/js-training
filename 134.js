let button = document.querySelector('.button');

button.addEventListener('click', function(){
    this.value = this.value * 1 + 1;
});