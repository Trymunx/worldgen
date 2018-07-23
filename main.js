const canvas = document.getElementById("world-canvas");
const c = canvas.getContext("2d");

c.fillStyle = "#343";
c.fillRect(0,0,500,500);

c.fillStyle = "white";
for (let i = 0; i < 80; i++) {
  c.beginPath();
  c.arc(~~(Math.random() * 500), ~~(Math.random() * 500), 1, 0, 2 * Math.PI, true);
  c.fill();
}