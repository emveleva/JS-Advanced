function stopwatch() {
    let timer = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let interval;

    startBtn.addEventListener('click', function(e) {
        timer.textContent = '00:00';
        stopBtn.removeAttribute('disabled');
        e.currentTarget.setAttribute('disabled', true);
        interval = setInterval(function() {
            let currentTime = timer.textContent;
            let timeArray = currentTime.split(':');
            let minutes = Number(timeArray[0]);
            let seconds = Number(timeArray[1]);

            seconds++;

            if (seconds > 59){
                minutes++;
                seconds = 0;
            }

            timer.textContent  = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;



        }, 1000)

    })
    stopBtn.addEventListener('click', function(e) {
        clearInterval(interval);
        startBtn.removeAttribute('disabled');
        e.currentTarget.setAttribute('disabled', true);

    })

}