let arr = [2025, 6, 32];
let [year, month, day] = arr;
let date = new Date(year, month, day);

function checkDate(date){
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true;
    };
    return false;
};

console.log(checkDate(date));