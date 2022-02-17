let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(){
    if(event.type === 'click'){
        elem.classList.remove('inactive');
        elem.classList.add('active');
    }else if(event.type === 'dblclick'){
        elem.classList.add ('inactive');
        elem.classList.remove('active');
    };
};