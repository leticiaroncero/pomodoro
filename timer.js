$(document).ready() {
    $("#start").on("click", timerObj.start);

}


var clockRunning = false;
var interval;

var timerObj = {
    seconds: 60,
    minutes: 25,

    start: function () {
        if (!clockRunning) {
            clockRunning = true;
            interval = setInterval(timerObj.count, 1000)
        }

    },

    count: function () {
        timerObj.seconds--

        var converted = timerObj.timeConverter(timerObj.seconds, timerObj.minutes);
        console.log(converted);

        $("#time-left").text(converted);
    },

    timeConverter: function (seconds, minutes) {
        if (seconds === 0) {
            minutes--
        }

        if (seconds = 60) {
            seconds = "00"
        }
    }
}