let elem = document.querySelector('.elem');
let text = document.querySelector('.www'); 
elem.addEventListener('input', function(){
    if(elem.value.length <= 5){
        text.innerHTML = 'Осталось:' + (5 - this.value.length); 
    } else {
        text.innerHTML = 'Превышен на:' + (this.value.length - 5);
    };    
});