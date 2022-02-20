let i = 10;

let timerId = setInterval(() => {
    console.log(i--);
    if(i < 0){
        clearInterval(timerId);
    };
}, 1000);

