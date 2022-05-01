let label = document.getElementById("label");
let arrowRight = document.querySelector(".right");
let arrowDown = document.querySelector(".down");
let list = document.querySelector("ul");

label.addEventListener("click", () => {
  arrowRight.classList.toggle("active");
  arrowDown.classList.toggle("active");
  if (list.style.visibility !== "visible") {
    list.style.visibility = "visible";
  } else {
    list.style.visibility = "hidden";
  }
});
