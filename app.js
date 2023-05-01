const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");

setInterval(function () {
    const date = new Date();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let ampm = "AM";
    if (hours > 11) {
        ampm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }
    if (seconds < 10) {
        secondsElem.innerText = "0" + "" + seconds;
    } else {
        secondsElem.innerText = seconds;
    }
    hoursElem.innerText = hours;
    minutesElem.innerText = date.getMinutes();
    ampmElem.innerText = ampm;
}, 1000)