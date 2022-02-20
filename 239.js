let button = document.querySelector('#button');
let text = document.querySelector('.text');

button.addEventListener('click', function(){
    setInterval(function(){
        text.innerHTML = Number(text.innerHTML) + 1;
    }, 1000);
});