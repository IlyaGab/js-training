function func(...nums){
    let sum = 0;
    for (let num of nums){
        sum += num / nums.length;
    };
    return sum;
};

console.log(func(5, 5, 3, 5, 6)); 