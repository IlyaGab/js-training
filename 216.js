let links = document.querySelectorAll('.link');

for(let link of links){
    link.addEventListener('click', function(event){
        event.preventDefault();
        event.target.innerHTML = event.target.innerHTML + " " + event.target.href;
    });
};