let elem = document.querySelector('.text');

elem.addEventListener('click', function(event){
    if (event.ctrlKey){
        elem.classList.toggle('inactive');
    };
});