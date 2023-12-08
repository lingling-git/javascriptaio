const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let position2 = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    position = position - 10;
  }
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    position = position + 10;
  }
  if (e.code === "ArrowDown" || e.code === "KeyS") {
    position2 = position2 + 10;
  }
  if (e.code === "ArrowUp" || e.code === "KeyW") {
    position2 = position2 - 10;
  }
  if (position < 0) {
    position = 0;
  }
  if (position2 < 0) {
    position2 = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = position2 + "px";
}
