function initPomodoro(windowEl) {
    let workTime = 25;
    let breakTime = 5;
    let timeLeft = workTime * 60;
    let timer = null;
    let isRunning = false;
    let mode = 'work';
    let sessions = 0;

    const timerDisplay = windowEl.querySelector('#timer');
    const modeDisplay = windowEl.querySelector('#mode');
    const sessionsDisplay = windowEl.querySelector('#sessions');
    const workInput = windowEl.querySelector('#workTime');
    const breakInput = windowEl.querySelector('#breakTime');

    const startBtn = windowEl.querySelector('#start');
    const pauseBtn = windowEl.querySelector('#pause');
    const resetBtn = windowEl.querySelector('#reset');

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function updateDisplay() {
        timerDisplay.textContent = formatTime(timeLeft);
    }

    function switchMode() {
        if (mode === 'work') {
            mode = 'break';
            timeLeft = breakTime * 60;
            sessions++;
        } else {
            mode = 'work';
            timeLeft = workTime * 60;
        }

        modeDisplay.textContent = 'Mode: ' + (mode === 'work' ? 'Work' : 'Break');
        sessionsDisplay.textContent = 'Sessions: ' + sessions;
        updateDisplay();
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true;

        timer = setInterval(() => {
            if (timeLeft <= 0) {
                switchMode();
            } else {
                timeLeft--;
            }
            updateDisplay();
        }, 1000);
    }

    function pauseTimer() {
        isRunning = false;
        clearInterval(timer);
    }

    function resetTimer() {
        pauseTimer();
        mode = 'work';
        sessions = 0;

        workTime = parseInt(workInput.value) || 25;
        breakTime = parseInt(breakInput.value) || 5;

        timeLeft = workTime * 60;

        modeDisplay.textContent = 'Mode: Work';
        sessionsDisplay.textContent = 'Sessions: 0';
        updateDisplay();
    }
    workInput.addEventListener('input', () => {
        workTime = parseInt(workInput.value) || 0;
        if (mode === 'work') {
            timeLeft = workTime * 60;
            updateDisplay();
        }
    });

    breakInput.addEventListener('input', () => {
        breakTime = parseInt(breakInput.value) || 0;
        if (mode === 'break') {
            timeLeft = breakTime * 60;
            updateDisplay();
        }
    });


    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);


    modeDisplay.textContent = 'Mode: Work';
    sessionsDisplay.textContent = 'Sessions: 0';
    updateDisplay();
}
window.initPomodoro = initPomodoro; function initPomodoro(windowEl) {
    let workTime = 25;
    let breakTime = 5;
    let timeLeft = workTime * 60;
    let timer = null;
    let isRunning = false;
    let mode = 'work';
    let sessions = 0;

    const timerDisplay = windowEl.querySelector('#timer');
    const modeDisplay = windowEl.querySelector('#mode');
    const sessionsDisplay = windowEl.querySelector('#sessions');
    const workInput = windowEl.querySelector('#workTime');
    const breakInput = windowEl.querySelector('#breakTime');

    const startBtn = windowEl.querySelector('#start');
    const pauseBtn = windowEl.querySelector('#pause');
    const resetBtn = windowEl.querySelector('#reset');

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function updateDisplay() {
        timerDisplay.textContent = formatTime(timeLeft);
    }

    function switchMode() {
        if (mode === 'work') {
            mode = 'break';
            timeLeft = breakTime * 60;
            sessions++;
        } else {
            mode = 'work';
            timeLeft = workTime * 60;
        }

        modeDisplay.textContent = 'Mode: ' + (mode === 'work' ? 'Work' : 'Break');
        sessionsDisplay.textContent = 'Sessions: ' + sessions;
        updateDisplay();
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true;

        timer = setInterval(() => {
            if (timeLeft <= 0) {
                switchMode();
            } else {
                timeLeft--;
            }
            updateDisplay();
        }, 1000);
    }

    function pauseTimer() {
        isRunning = false;
        clearInterval(timer);
    }

    function resetTimer() {
        pauseTimer();
        mode = 'work';
        sessions = 0;

        workTime = parseInt(workInput.value) || 25;
        breakTime = parseInt(breakInput.value) || 5;

        timeLeft = workTime * 60;

        modeDisplay.textContent = 'Mode: Work';
        sessionsDisplay.textContent = 'Sessions: 0';
        updateDisplay();
    }

    workInput.addEventListener('input', () => {
        workTime = parseInt(workInput.value) || 0;
        if (mode === 'work') {
            timeLeft = workTime * 60;
            updateDisplay();
        }
    });

    breakInput.addEventListener('input', () => {
        breakTime = parseInt(breakInput.value) || 0;
        if (mode === 'break') {
            timeLeft = breakTime * 60;
            updateDisplay();
        }
    });

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    modeDisplay.textContent = 'Mode: Work';
    sessionsDisplay.textContent = 'Sessions: 0';
    updateDisplay();
}
window.initPomodoro = initPomodoro;