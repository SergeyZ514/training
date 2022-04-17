let body = document.querySelector("body");

function showNotification({ top = 0, right = 0, className, html }) {
  let message = document.createElement("div");
  message.innerHTML = html;
  message.classList.add(className, "notification");
  message.style.top = top + "px";
  message.style.right = right + "px";
  body.prepend(message);

  setTimeout(() => {
    message.remove();
  }, 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
