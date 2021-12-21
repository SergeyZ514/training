const canvas = document.querySelector("#canvas");
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext("2d");
const blockSize = 20;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;
let score = 0;
const directions = {
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down",
};

let drawBorder = function () {
  ctx.fillStyle = "Gray";
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

let drawScore = function () {
  ctx.font = "24px Arial";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.zIndex = "200";
  ctx.fillText("Счет: " + score, blockSize, blockSize);
};

let gameOver = function () {
  clearInterval(intervalId);
  ctx.font = "60px Arial";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Потрачено", width / 2, height / 2);
};

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

class Block {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  drawSquare(color) {
    let x = this.col * blockSize;
    let y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  }
  drawCircle(color) {
    let centerX = this.col * blockSize + blockSize / 2;
    let centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
  }
  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}

class Snake {
  constructor() {
    this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
    this.direction = "right";
    this.nextDirection = "right";
  }
  draw() {
    this.segments.forEach((segment) => {
      segment.drawSquare("Blue");
    });
  }
  move() {
    let head = this.segments[0];
    let newHead;

    this.direction = this.nextDirection;

    if (this.direction === "right") {
      newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
      newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
      newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
      newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead)) {
      gameOver();
      return;
    }

    this.segments.unshift(newHead);
    if (newHead.equal(apple.position)) {
      score++;
      apple.move();
    } else {
      this.segments.pop();
    }
  }
  checkCollision(head) {
    let leftCollision = head.col === 0;
    let topCollision = head.row === 0;
    let rightCollision = head.col === widthInBlocks - 1;
    let bottomCollision = head.row === heightInBlocks - 1;

    let wallCollision =
      leftCollision || topCollision || rightCollision || bottomCollision;

    let selfCollision = false;

    this.segments.forEach((segment) => {
      if (head.equal(segment)) {
        selfCollision = true;
      }
    });
    return wallCollision || selfCollision;
  }
  setDirection(newDirection) {
    if (this.direction === "up" && newDirection === "down") {
      return;
    } else if (this.direction === "right" && newDirection === "left") {
      return;
    } else if (this.direction === "down" && newDirection === "up") {
      return;
    } else if (this.direction === "left" && newDirection === "right") {
      return;
    }

    this.nextDirection = newDirection;
  }
}

class Apple {
  constructor() {
    this.position = new Block(10, 10);
  }
  draw() {
    this.position.drawCircle("LimeGreen");
  }
  move() {
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
  }
}

let apple = new Apple();
let snake = new Snake();

let intervalId = setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  drawBorder();
  apple.draw();
  snake.draw();
  snake.move();
}, 100);

document.addEventListener("keydown", function (KeyboardEvent) {
  let newDirection = directions[KeyboardEvent.key];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
});
