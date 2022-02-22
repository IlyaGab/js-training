let childs = document.querySelectorAll('li');

for (let child of childs){
    child.addEventListener('click', function(){
        this.remove();
    });
};