let elem = document.querySelector('.elem');

elem.addEventListener('input', function(){
    if(this.value.length === 5){
        console.log('Max length');
    };
});