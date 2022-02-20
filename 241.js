let elem = document.querySelector('#elem');

setInterval(() => {
    elem.value = Number(elem.value) * Number(elem.value);
}, 1000);