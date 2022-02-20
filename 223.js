"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	let child = () => this.value * this.value;
    alert(child());
};
