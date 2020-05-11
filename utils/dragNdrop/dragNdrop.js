const ball = document.querySelector(".ball");
const goal = document.querySelector(".goal");

let ball_top = 10,
  ball_left = 10,
  mouse_offset_x,
  mouse_offset_y;

const goal_size = 150,
  goal_bottom = 20,
  goal_right = 20,
  ball_size = 80;

function getMouseInitialPosition(event) {
  if (!is_dragging) {
    mouse_offset_x = event.clientX;
    mouse_offset_y = event.clientY;
  }
}

function handleDrag(event) {
  ball.style.top =
    ball_top + event.clientY - mouse_offset_y + "px";
  ball.style.left =
    ball_left + event.clientX - mouse_offset_x + "px";
}

function handleClick(event) {
  mouse_offset_x = event.clientX;
  mouse_offset_y = event.clientY;
  ball.addEventListener("mousemove", handleDrag);
}

function handleDrop(event) {
  ball_temp_top = Number(ball.style.top.replace("px", ""));
  ball_temp_left = Number(
    ball.style.left.replace("px", "")
  );
  if (
    ball_temp_top >=
      window.innerHeight - (goal_bottom + goal_size) &&
    ball_temp_top + ball_size <=
      window.innerHeight - goal_bottom &&
    ball_temp_left >=
      window.innerWidth - (goal_right + goal_size) &&
    ball_temp_left + ball_size <=
      window.innerWidth - goal_right
  ) {
    ball_top = ball_temp_top;
    ball_left = ball_temp_left;
    goal.style.backgroundColor = "yellow";
  }
  ball.style.top = ball_top + "px";
  ball.style.left = ball_left + "px";

  ball.removeEventListener("mousemove", handleDrag);
}

ball.addEventListener("mousedown", handleClick);
ball.addEventListener("mouseup", handleDrop);
