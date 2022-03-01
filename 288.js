function setAttr(id, attribute, newValue){
    let elem = document.getElementById(id);
    elem.value = attribute + "  " + newValue;  
};

setAttr('elem', 'value' , 16);