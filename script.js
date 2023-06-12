// Getting the required elements :

const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Initializing variables :

let startTime;
let elapsedTime = 0;
let timerInterval;

// Formatting Time (HH:MM:SS) :

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

// Padding time value with leading zeros if necessary :

function padTime(value) {
  return value.toString().padStart(2, '0');
}

// Updating elapsed time :

function updateDisplay() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

// Starting stopwatch :

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateDisplay, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
}

// Stopping stopwatch
function stopStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

// Resetting stopwatch :

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

// Adding event listeners to the buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
