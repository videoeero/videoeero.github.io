var end = new Date('10/17/2018 12:15 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end.getTime()-now.getTime();
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'IT IS OVER!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days + 'D';
        document.getElementById('hours').innerHTML = hours + 'H';
        document.getElementById('minutes').innerHTML = minutes + 'MIN';
        document.getElementById('seconds').innerHTML = seconds + 'S';
    }

    timer = setInterval(showRemaining, 1000);