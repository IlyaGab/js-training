let parent = document.querySelector('#elem');
let text = parent.children;
let button = document.querySelector('.button');

button.addEventListener('click', function func(){
    for (let elem of text){
        elem.innerHTML = elem.innerHTML + '!';
        elem.classList.toggle('active');
    };
});