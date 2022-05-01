window.onload = () => {
  "use strict";
  let field = document.querySelector("#field");
  let ball = document.querySelector("#ball");

  field.addEventListener("click", (event) => {
    let fieldRect = field.getBoundingClientRect();

    let ballCoords = {
      left:
        event.clientX -
        fieldRect.left -
        field.clientLeft -
        ball.clientWidth / 2,
      top:
        event.clientY - fieldRect.top - field.clientTop - ball.clientHeight / 2,
    };

    if (ballCoords.top < 0) {
      ballCoords.top = 0;
    }
    if (ballCoords.left < 0) {
      ballCoords.left = 0;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    ball.style.left = ballCoords.left + "px";
    ball.style.top = ballCoords.top + "px";
  });
};
