let elems = document.querySelectorAll('li');
let colors = ['color1', 'color2', 'color3'];
let i = 0;

for(let elem of elems){
    elem.addEventListener('click', function func(){
        this.classList.add(colors[i]);
        i++
        if(i == colors.length){
            i = 0;
        };
    });
};


