let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let randomStr = "";
        for(let i = 0; i < 8; i++){
            randomStr += alphabet[Math.round(Math.random() * (alphabet.length - 1 ))]
            elem.value = randomStr;
        };
        
});
