let elem = document.querySelector('#elem');

let arr = [1, 2, 3, 4, 5];

for(let num of arr){
    let text = document.createElement('p');
    text.innerHTML = num;
    elem.appendChild(text);
    text.addEventListener('click', function(){
        this.innerHTML = Number(this.innerHTML) + 1;
    });
};