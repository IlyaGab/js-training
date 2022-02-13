let link = document.querySelector('.link');

link.addEventListener('click', func);
    
function func(){
    link.innerHTML = link.innerHTML + '(' + link.href + ')';
    this.removeEventListener('click', func);
};