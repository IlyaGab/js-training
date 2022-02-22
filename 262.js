let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
	elem.parentElement.removeChild(elem);
	event.preventDefault(); // отменяем переход по ссылке
});
