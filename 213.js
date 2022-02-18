let text = document.querySelector('.text');
let elem = document.querySelector('.elem');

elem.addEventListener('keydown', function(event){
    if(event.code == "Enter"){
        text.innerHTML = elem.value;
        elem.value = '';
    };
});

