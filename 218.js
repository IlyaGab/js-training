let elem = document.querySelector('div');

elem.addEventListener('click', function(event){
    console.log(event.target.tagName);
});