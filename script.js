const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes  = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(hour, hours);
    rotateClockHand(minute, minutes);
    rotateClockHand(second, seconds);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}
setInterval(clockTick, 1000)