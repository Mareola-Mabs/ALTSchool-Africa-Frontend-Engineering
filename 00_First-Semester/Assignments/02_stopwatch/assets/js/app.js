let startTime;
let elapsed = 0;
let isRunning = false;
let lapsArray = [];

function formatTime(ms) {
  const totalCentis = Math.floor(ms / 10);
  const mins = String(Math.floor(totalCentis / 6000)).padStart(2, "0");
  const secs = String(Math.floor((totalCentis % 6000) / 100)).padStart(2, "0");
  const centis = String(totalCentis % 100).padStart(2, "0");
  return `${mins}:${secs}.${centis}`;
}

function updateDisplay() {
  const now = Date.now();
  const diff = isRunning ? elapsed + (now - startTime) : elapsed;

  document.getElementById("display").textContent = formatTime(diff);


  const deg = ((diff % 60000) / 60000) * 360;
  document.getElementById("progress").style.transform = `rotate(${deg}deg)`;

  if (isRunning) requestAnimationFrame(updateDisplay);
}

function start() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    requestAnimationFrame(updateDisplay);
  }
}

function stop() {
  if (isRunning) {
    elapsed += Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  isRunning = false;
  elapsed = 0;
  lapsArray = [];
  document.getElementById("display").textContent = "00:00.00";
  document.getElementById("progress").style.transform = "rotate(0deg)";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const now = isRunning ? elapsed + (Date.now() - startTime) : elapsed;
  const timeStr = formatTime(now);
  lapsArray.push(timeStr);
  const lapDiv = document.createElement("div");
  lapDiv.textContent = `Lap ${lapsArray.length}: ${timeStr}`;
  document.getElementById("laps").prepend(lapDiv);
}
