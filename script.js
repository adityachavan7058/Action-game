let score = 0;
let cross = true;

 gameOver = new Audio("gameover.mp3");
 music = new Audio("music.mp3");


music.play();

document.onkeydown = (e) => {
  console.log("The current key code is ", e.keyCode);
  if (e.keyCode === 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");

    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }

  if (e.keyCode === 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );

    dino.style.left = dinoX + 112 + "px";
  }

  if (e.keyCode === 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );

    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  obstacle = document.querySelector(".obstacle");
  gameOver = document.querySelector(".gameOver");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));

  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );

  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 90 && offsetY < 58) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");

  }
}, 100);
