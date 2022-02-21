let text = document.querySelector('.text');

setInterval(() => {
    if (text.classList.contains('active')){
        text.classList.remove('active');
        text.classList.add('inactive');
    } else if (text.classList.contains('inactive')){
        text.classList.remove('inactive');
        text.classList.add('active');
    } else {
        text.classList.add('active');
    };
}, 1000);