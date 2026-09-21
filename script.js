let seconds = 0;
let timer;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
  timer = setInterval(() => {
    seconds++;

    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;

    timerDisplay.textContent =
      `${String(hour).padStart(2, "0")}:` +
      `${String(minute).padStart(2, "0")}:` +
      `${String(second).padStart(2, "0")}`;
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  seconds = 0;
  timerDisplay.textContent = "00:00:00";
});

const subjectButtons = document.querySelectorAll(".subject_button");
const selectedSubject = document.getElementById("selected_subject");

subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSubject.textContent = button.textContent;
  });
});
