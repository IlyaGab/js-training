let arr = [];
let k = 1;
for (let i = 0; i < 4; i++){
    arr[i] = [];
    for (let j = 0; j < 2; j++){
        arr[i][j] = k++;
    }
}
console.log(arr);