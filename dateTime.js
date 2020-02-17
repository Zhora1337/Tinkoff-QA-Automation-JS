let now = new Date();
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getFullYear());

let d = new Date(2012, 1, 20, 3, 12);


function getWeekDay(date) {
    day = date.getDay();
    if (day == 0) {
        return "Sunday";
    } else if (day == 1) {
        return "Monday";
    } else if (day == 2) {
        return "Tuesday";
    } else if (day == 3) {
        return "Wenseday";
    } else if (day == 4) {
        return "Thursday";
    } else if (day == 5) {
        return "Friday";
    } else {
        return "Saturday";
    }
}
console.log(getWeekDay(d));
function getDateAgo(date, days) {
    let result = date - (days * 3600 * 1000 * 24);
    return new Date(result).getDate();
}

console.log(getDateAgo(new Date(), 365));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0).getDate();
    return date;
}

console.log(getLastDayOfMonth(2012, 2))

function getSecondsToday() {
    let now = new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();
    return now;
}

console.log(getSecondsToday())

function getSecondsToTomorrow() {
    return (3600 * 24) - getSecondsToday();
}

console.log(getSecondsToTomorrow())