let text = document.querySelector('.text');
let date = new Date;
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

setInterval(() => {
    text.innerHTML = (hours + ':' + minutes + ':' + seconds);
    seconds++;
    if(seconds === 60){
        minutes = minutes + 1;
        seconds = 0;
    } else if (seconds < 10){
        seconds = '0' + seconds;
    } if (minutes === 60){
        hours = hours + 1;
        minutes = 0; 
        seconds = 0;
    } if (hours === 24){
        hours = 0;
    };
}, 1000);