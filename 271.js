let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
    input.value = elem.innerHTML;

    input.addEventListener('blur', function(){
        elem.innerHTML = this.value;
        this.parentElement.removeChild(this);
    });

    elem.parentElement.appendChild(input);
});