let select = document.querySelector('#select');
let options = document.querySelectorAll('#select option');
let optionSelected = select[7];
optionSelected.selected = true;

for (let option of options){
    if (option.selected === true){
        option.text = option.text + "!";
    } else {
        option.text = option.text + "?";
    };   
};