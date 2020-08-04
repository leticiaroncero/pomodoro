$(document).ready (function () {
    $("#start").on("click", timerObj.start);


});

var clockRunning = false;
var intervalSec;
var intervalMin;

var timerObj = {
    seconds: 60,
    minutes: 25,

    start: function () {
        if (!clockRunning) {
            clockRunning = true;
            intervalSec = setInterval(timerObj.count, 1000)
            intervalMin = setInterval(timerObj.count2, 60000)
        }

    },

    count: function () {
        if (timerObj.seconds === 0) {
            timerObj.seconds = 60
        }
        
        timerObj.seconds--;

        var converted = timerObj.timeConverter(timerObj.seconds, timerObj.minutes);
        console.log(converted);

        $("#time-left").text(converted);
    },
   
    count2: function() {
        if(timerObj.minutes === 0) {
            timerObj.minutes = 25
        }

      timerObj.minutes--;
      var newConverted = timerObj.timeConverter(timerObj.seconds, timerObj.minutes)
      
      console.log(newConverted);

      $("#time-left").text(newConverted);

    },

    timeConverter: function (seconds, minutes) {
        // if (seconds === 0) {
        //     minutes--
        // }
        
        if (seconds < 10) {
            seconds = "0" + seconds;
          }

        if (seconds === 60) {
            seconds = "00"
        }
        if (minutes === 0) {
            minutes = "00";
          }
         if (minutes < 10) {
            minutes = "0" + minutes;
          }
      
        return minutes + ":" + seconds;
    }
}