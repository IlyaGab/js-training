let arr = ['string', 'string', 'string'];

let result = arr.map(function(elem){
    return elem.split('').reverse().join('');
});

console.log(result);