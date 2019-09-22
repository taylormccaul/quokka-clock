const root = document.documentElement;

function updateTime() {
    var clockTime = new Date()
    var hours = clockTime.getHours()
    var h = hours;
    var minutes = clockTime.getMinutes()
    var seconds = clockTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    } 

    if (hours > 12) {
        h = hours - 12;
    } else if (hours == 0) {
        h = 12;
    }

    var timeString = "It's " + h + ":" + minutes + ":" + seconds + " ";

    if (hours > 11) {
        timeString += "PM";
    } else {
        timeString += "AM";
    }

    document.getElementById("clock-h2").innerHTML = timeString;
}
setInterval(updateTime, 1000);

h3.addEventListener('click', animateImage);

function animateImage() {
    document.getElementById('initial-img').className = 'img-animation';
}