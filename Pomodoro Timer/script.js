let timer;
let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft === 0) {
            clearInterval(timer);
            isRunning = false;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
