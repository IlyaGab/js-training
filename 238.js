let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function(self) {
		self.value--;
	}, 1000, this);
});