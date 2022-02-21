let text = document.querySelector('.text');
let startBtn = document.querySelector('.button1');
let stopBtn = document.querySelector('.button2');
let timerId;

startBtn.addEventListener('click', timer);

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
    startBtn.addEventListener('click', timer);
});

function timer(){
    timerId = setInterval(() => {
        text.innerHTML = Number(text.innerHTML) + 1;
    }, 1000);
    startBtn.removeEventListener('click', timer);
};    