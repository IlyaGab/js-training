let now = new Date();
let year = new Date(now.getFullYear());

for (let month = 0; month <= 11; month++){
    let date = new Date(year, month, 13);
    if (date.getDay() === 5){
        console.log(date);
    };
};
