let elem = document.querySelector('#elem');
let list = document.createElement('li');
let listText = document.createTextNode('text');


elem.addEventListener('click', function(event){
    if(event.target.tagName === 'UL'){
        list.appendChild(listText);
        let lastElem = elem.lastChild.nextSibling;
        elem.insertBefore(list, lastElem);
    } else if (event.target.tagName === "LI"){ 
        event.target.innerHTML = event.target.innerHTML + "!";
    };   
});