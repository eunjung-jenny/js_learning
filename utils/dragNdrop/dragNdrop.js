const ball = document.querySelector(".ball");
const goal = document.querySelector(".goal");

let ballTop = 10,
  ballLeft = 10,
  mouseOffsetX,
  mouseOffsetY;

const goalSize = 150,
  goalBottom = 20,
  goalRight = 20,
  ballSize = 80;

const getMouseInitialPosition = function (event) {
  if (!is_dragging) {
    mouseOffsetX = event.clientX;
    mouseOffsetY = event.clientY;
  }
};

const handleDrag = function (event) {
  ball.style.top =
    ballTop + event.clientY - mouseOffsetY + "px";
  ball.style.left =
    ballLeft + event.clientX - mouseOffsetX + "px";
};

const handleClick = function (event) {
  mouseOffsetX = event.clientX;
  mouseOffsetY = event.clientY;
  ball.addEventListener("mousemove", handleDrag);
};

const handleDrop = function (event) {
  ball_temp_top = Number(ball.style.top.replace("px", ""));
  ball_temp_left = Number(
    ball.style.left.replace("px", "")
  );
  if (
    ball_temp_top >=
      window.innerHeight - (goalBottom + goalSize) &&
    ball_temp_top + ballSize <=
      window.innerHeight - goalBottom &&
    ball_temp_left >=
      window.innerWidth - (goalRight + goalSize) &&
    ball_temp_left + ballSize <=
      window.innerWidth - goalRight
  ) {
    ballTop = ball_temp_top;
    ballLeft = ball_temp_left;
    goal.style.backgroundColor = "yellow";
  }
  ball.style.top = ballTop + "px";
  ball.style.left = ballLeft + "px";

  ball.removeEventListener("mousemove", handleDrag);
};

ball.addEventListener("mousedown", handleClick);
ball.addEventListener("mouseup", handleDrop);
