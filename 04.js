let arr = [];

for (let i = 0; i < 3; i++){
    arr[i] = [];
    for (let j = 0; j < 5; j++){
        arr[i][j] = j + 1;
    }
}

console.log(arr);