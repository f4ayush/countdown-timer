let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
daysElement.textContent = "14";
hoursElement.textContent = "00";
minutesElement.textContent = "00";
secondsElement.textContent = "00";

let counterTime = 14 * 24 * 60 * 60;

setInterval(() => {
    counterTime -= 1;
    setTimerInElements(counterTime)
}, 1000);

function setTimerInElements(counterTime) {
    let days = parseInt(counterTime / (24 * 60 * 60));
    let remainder = counterTime % (24 * 60 * 60);
    let hours = parseInt(remainder / (60 * 60));
    remainder = counterTime % (60 * 60);
    let minutes = parseInt(remainder / (60));
    remainder = counterTime % 60;
    let seconds = remainder;


    let newDays = days >= 10 ? days : "0" + days;
    let newHours = hours >= 10 ? hours : "0" + hours;
    let newMinutes = minutes >= 10 ? minutes : "0" + minutes;
    let newSeconds = seconds >= 10 ? seconds : "0" + seconds;

    flipCard(daysElement, hoursElement, minutesElement, secondsElement, newDays, newHours, newMinutes, newSeconds)
    daysElement.textContent = newDays;
    hoursElement.textContent = newHours;
    minutesElement.textContent = newMinutes;
    secondsElement.textContent = newSeconds;
}

function flipCard(daysElement, hoursElement, minutesElement, secondsElement, newDays, newHours, newMinutes, newSeconds){
    if(secondsElement.textContent != newSeconds){
        /* TODO */
    }
    
}