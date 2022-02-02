let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
summ = 0;
summ1 = 0;
for (let key in obj){
    summ += Number([key]);
    summ1 += obj[key];
    summ3 = summ/summ1;
}
console.log(summ3);
