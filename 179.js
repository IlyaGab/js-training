let links = document.querySelectorAll('.link');

for(let link of links){
    link.addEventListener('click', function(){
        this.innerHTML = this.innerHTML + '(' + this.href + ')' ;
    });
};