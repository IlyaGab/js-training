let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    let valueStr = elem.value;
    let randomStr = "";
        for (let i = 0; i < valueStr.length; i++){
            randomStr += valueStr[Math.round(Math.random() * (valueStr.length - 1 ))];
            elem.value = randomStr;
        };  
});
