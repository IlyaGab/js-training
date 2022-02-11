let now = new Date();

function func(year, month , day){
    let date = new Date(year, month, day);
    if (date.getDate() == 29){
        return 'високостный';
    };
    return 'обычный';
};

console.log(func(now.getFullYear(), now.getMonth() + 1, 0));