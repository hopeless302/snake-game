// Define the HTML elements
const board = document.getElementById("game-board");

// Define game variables
let snake = [{ x: 10, y: 10 }];

//Draw game map, snake, food

function draw() {
  board.innerHTML = "";
  drawSnake();
}

// Draw Snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

// Create a snake or food div
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className; // What this does is to make a div with the name of snake
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

draw();
