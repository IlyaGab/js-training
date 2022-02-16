let elem = document.querySelector('.elem');

elem.addEventListener('change', function(){
    if(this.value.length < 5){
        this.classList.remove('inactive');
        this.classList.add('active');
    } else {
        this.classList.remove('active');
        this.classList.add('inactive');
    };
});