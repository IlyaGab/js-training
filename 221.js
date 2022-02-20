"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	let self = this;
	function square() {
		return self.value * self.value
	};
    alert( square() );
};