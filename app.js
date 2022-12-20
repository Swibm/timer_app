var hoursNode = document.getElementById("hours_value");
var minutesNode = document.getElementById("minutes_value");
var secondsNode = document.getElementById("seconds_value");

var endPoint = moment("00:00:00", "HH:mm:SS");

var startEventTime
var startTimeString
var interval

function insertTime() {

    var hourStart = document.getElementById('hours_input').value.padStart(2, 0)
    var minuteStart = document.getElementById('minutes_input').value.padStart(2, 0)
    var secondStart = document.getElementById('seconds_input').value.padStart(2, 0)

    if(hourStart == '00' && minuteStart == '00' && secondStart == '00') {
        alert('No time to count')
    }
    else {
    startTimeString = hourStart + ":" + minuteStart + ":" + secondStart
    startEventTime = moment(startTimeString, "HH:mm:ss");

    hoursNode.textContent = hourStart;
    minutesNode.textContent = minuteStart;
    secondsNode.textContent = secondStart;
    }
}

function CountDown() {
    if(hoursNode.textContent == "" || hoursNode.textContent == "" || hoursNode.textContent == "") {
        clearInterval(interval);
    }

    startEventTime = startEventTime.add(-1, 'second')
    
    var hours = startEventTime.hours().toString().padStart(2, 0);
    hoursNode.textContent = hours;

    var minutes = startEventTime.minutes().toString().padStart(2, 0);
    minutesNode.textContent = minutes;

    var seconds = startEventTime.seconds().toString().padStart(2, 0);
    secondsNode.textContent = seconds;

    if(startEventTime - endPoint <= 0) {
        clearInterval(interval);
    }
}

function startTimer() {
    interval = setInterval(CountDown, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    if(interval > 0) {
        clearInterval(interval)
    }
    hoursNode.textContent = "";
    minutesNode.textContent = "";
    secondsNode.textContent = "";
}

document.getElementById('button_insert_time').addEventListener("click", insertTime)
document.getElementById('button_start_timer').addEventListener("click", startTimer)
document.getElementById('button_stop_timer').addEventListener("click", stopTimer)
document.getElementById('button_reset_timer').addEventListener("click", resetTimer)



