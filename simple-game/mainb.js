const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  speed: 5,
};

function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayer() {
  if (keysDown["ArrowLeft"]) player.x -= player.speed;
  if (keysDown["ArrowRight"]) player.x += player.speed;

  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width)
    player.x = canvas.width - player.width;
}

const keysDown = {};
window.addEventListener("keydown", (e) => (keysDown[e.code] = true));
window.addEventListener("keyup", (e) => (keysDown[e.code] = false));

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayer();
  updatePlayer();

  requestAnimationFrame(gameLoop);
}

gameLoop();