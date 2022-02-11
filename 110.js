let paragraph1 = document.querySelector('#elem1');
let paragraph2 = document.querySelector('#elem2');
let paragraph3 = document.querySelector('#elem3');
let paragraph4 = document.querySelector('#elem4');
let paragraph5 = document.querySelector('#elem5');

paragraph1.addEventListener('click', func);
paragraph2.addEventListener('click', func);
paragraph3.addEventListener('click', func);
paragraph4.addEventListener('click', func);
paragraph5.addEventListener('click', func);

function func(){
    console.log('message');
};