const monster = document.getElementById("monster");
const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
let score = 0;

// მონსტრის გადაადგილება შემთხვევით პოზიციაზე
function moveMonster() {
  const maxX = gameArea.clientWidth - monster.clientWidth;
  const maxY = gameArea.clientHeight - monster.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  monster.style.left = `${randomX}px`;
  monster.style.top = `${randomY}px`;
}

// ქულის დამატება მონსტრის დაჭერისას
monster.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
  moveMonster();
});

// პირველადი პოზიციონირება
moveMonster();
