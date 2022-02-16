let select = document.querySelector('#select');

select.addEventListener('change', function(){
    if(this.value >= 1 && this.value <= 5){
        console.log('Рабочий');
    }else {
        console.log('Выходной');
    };
});