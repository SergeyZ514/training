const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

class Ball {
  constructor() {
    this.radius = 12;
    this.x = Math.floor(Math.random() * width) + this.radius;
    this.y = Math.floor(Math.random() * height) + this.radius;
    this.xSpeed =
      Math.floor(Math.random() * 12) * (Math.random() < 0.5 ? -1 : 1);
    this.ySpeed =
      Math.floor(Math.random() * 11) * (Math.random() < 0.5 ? -1 : 1);
    this.colors = [
      "IndianRed",
      "LightCoral",
      "Salmon",
      "DarkSalmon",
      "LightSalmon",
      "Crimson",
      "Red",
      "FireBrick",
      "DarkRed",
      "Pink",
      "LightPink",
      "HotPink",
      "DeepPink",
      "MediumVioletRed",
      "PaleVioletRed",
      "LightSalmon",
      "Coral",
      "Tomato",
      "OrangeRed",
      "DarkOrange",
      "Orange",
      "Gold",
      "Yellow",
      "LightYellow",
      "LemonChiffon",
      "LightGoldenrodYellow",
      "PapayaWhip",
      "Moccasin",
      "PeachPuff",
      "PaleGoldenrod",
      "Khaki",
      "DarkKhaki",
      "Lavender",
      "Thistle",
      "Plum",
      "Violet",
      "Orchid",
      "Fuchsia",
      "Magenta",
      "MediumOrchid",
      "MediumPurple",
      "BlueViolet",
      "DarkViolet",
      "DarkOrchid",
      "DarkMagenta",
      "Purple",
      "Indigo",
      "SlateBlue",
      "DarkSlateBlue",
      "Cornsilk",
      "BlanchedAlmond",
      "Bisque",
      "NavajoWhite",
      "Wheat",
      "BurlyWood",
      "Tan",
      "RosyBrown",
      "SandyBrown",
      "Goldenrod",
      "DarkGoldenRod",
      "Peru",
      "Chocolate",
      "SaddleBrown",
      "Sienna",
      "Brown",
      "Maroon",
      "Black",
      "Gray",
      "Silver",
      "White",
      "Fuchsia",
      "Purple",
      "Red",
      "Maroon",
      "Yellow",
      "Olive",
      "Lime",
      "Green",
      "Aqua",
      "Teal",
      "Blue",
      "Navy",
      "GreenYellow",
      "Chartreuse",
      "LawnGreen",
      "Lime",
      "LimeGreen",
      "PaleGreen",
      "LightGreen",
      "MediumSpringGreen",
      "SpringGreen",
      "MediumSeaGreen",
      "SeaGreen",
      "ForestGreen",
      "Green",
      "DarkGreen",
      "YellowGreen",
      "OliveDrab",
      "Olive",
      "DarkOliveGreen",
      "MediumAquamarine",
      "DarkSeaGreen",
      "LightSeaGreen",
      "DarkCyan",
      "Teal",
      "Aqua",
      "Cyan",
      "LightCyan",
      "PaleTurquoise",
      "Aquamarine",
      "Turquoise",
      "MediumTurquoise",
      "DarkTurquoise",
      "CadetBlue",
      "SteelBlue",
      "LightSteelBlue",
      "PowderBlue",
      "LightBlue",
      "SkyBlue",
      "LightSkyBlue",
      "DeepSkyBlue",
      "DodgerBlue",
      "CornflowerBlue",
      "MediumSlateBlue",
      "RoyalBlue",
      "Blue",
      "MediumBlue",
      "DarkBlue",
      "Navy",
      "MidnightBlue",
      "White",
      "Snow",
      "Honeydew",
      "MintCream",
      "Azure",
      "AliceBlue",
      "GhostWhite",
      "WhiteSmoke",
      "Seashell",
      "Beige",
      "OldLace",
      "FloralWhite",
      "Ivory",
      "AntiqueWhite",
      "Linen",
      "LavenderBlush",
      "MistyRose",
      "Gainsboro",
      "LightGrey",
      "LightGray",
      "Silver",
      "DarkGray",
      "DarkGrey",
      "Gray",
      "Grey",
      "DimGray",
      "DimGrey",
      "LightSlateGray",
      "LightSlateGrey",
      "SlateGray",
      "SlateGrey",
      "DarkSlateGray",
      "DarkSlateGrey",
      "Black",
    ];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  draw() {
    circle(this.x, this.y, this.radius, true);
    ctx.fillStyle = this.color;
  }
  move() {
    if (this.xSpeed == 0) {
      this.xSpeed = 1;
    }
    if (this.ySpeed == 0) {
      this.ySpeed = 1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkCollision() {
    if (this.x < this.radius || this.x > width - this.radius) {
      this.xSpeed = -this.xSpeed;
      if (this.x < this.radius) {
        this.x = this.radius;
      } else if (this.x > width) {
        this.x = width - this.radius;
      }
    }
    if (this.y < this.radius || this.y > height - this.radius) {
      this.ySpeed = -this.ySpeed;
      if (this.y < this.radius) {
        this.y = this.radius;
      } else if (this.y > height) {
        this.y = height - this.radius;
      }
    }
  }
  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      if (this !== balls[j]) {
        let dx = this.x - balls[j].x;
        let dy = this.y - balls[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.radius + balls[j].radius) {
          this.xSpeed = -this.xSpeed;
          this.ySpeed = -this.ySpeed;
          balls[j].xSpeed = -balls[j].xSpeed;
          balls[j].ySpeed = -balls[j].ySpeed;
        }
      }
    }
  }
}

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();

  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let balls = [];
let howManyBalls = prompt("Как много мячей вам надо?");
while (howManyBalls.replace(/\s/g, "").length === 0 || isNaN(howManyBalls)) {
  howManyBalls = prompt("Как много мячей вам надо?");
}

for (let i = 0; i < howManyBalls; i++) {
  let ball = new Ball();
  balls.push(ball);
}

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach((ball) => {
    ball.draw();
    ball.move();
    ball.checkCollision();
    ball.collisionDetect();
  });

  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}, 15);
