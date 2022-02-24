let items = document.querySelectorAll('li');

for(let item of items){
    item.addEventListener('click', function(){
        let activeItems = document.querySelectorAll('li.color1');
        if(activeItems.length < 3){
            this.classList.add('color1');
        };
    });
};