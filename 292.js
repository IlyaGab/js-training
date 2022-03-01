let text = document.querySelector('#elem1');

function setText(elem, text){
    elem.append(' ' + text);
};
setText(text, 'Hello');