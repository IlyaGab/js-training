function appendText(selector, func){
    let elems = document.querySelectorAll(selector);
    for(let elem of elems){
        func(elem, '!');
    };
};

appendText('#elem', function (elem, text){
    elem.append(' ' + text);
});
