let array = [1, 2, 'Dog', 5, 6, 15];
let list = document.querySelector('ul');
for(let i = 0; i < array.length; i++){
    let item = document.createElement('li');
    item.innerHTML = array[i];
    list.append(item);
    item.addEventListener('click', function func(){
        let input = document.createElement('input');
        item.innerHTML = '';
        item.appendChild(input);
        input.addEventListener('blur', function(){
            item.innerHTML = this.value;
            item.addEventListener('click', func);
            if(item.innerHTML === ''){
                item.innerHTML = array[i];
            };
        });
        item.removeEventListener('click', func);
    });
};  
