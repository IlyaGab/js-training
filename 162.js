let button = document.querySelector('.button');
let result = 0;

button.addEventListener('click', function(){
    result += Number(this.dataset.num);
});

button.addEventListener('dblclick', function(){
    console.log(result);
});