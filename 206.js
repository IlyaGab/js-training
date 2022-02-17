let select = document.querySelector('#select');
let options = document.querySelectorAll('#select option');

for (let option of options){
    option.innerHTML = option.innerHTML + " " + option.value;
};