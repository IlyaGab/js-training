let items = document.querySelectorAll('.item');

for(let item of items){
    item.addEventListener('click', function func(){
        let input = document.createElement('input');
        input.value = item.innerHTML;
        item.innerHTML = '';
        item.appendChild(input);
        input.addEventListener('blur', function(){
            item.innerHTML = this.value;
            item.addEventListener('click', func);
        });
        item.removeEventListener('click', func);
    }); 
};