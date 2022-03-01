function appendText(selector, text){
    let elems = document.querySelectorAll(selector);
    for(let elem of elems){
        elem.append(text);
    };
};
appendText('.elem', '!');