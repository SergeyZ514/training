// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
/* let i = 1;
for (let li of document.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`,
  );
  i++;
} */

let width = 130;
let count = 3;

let carousel = document.querySelector(".carousel");
let list = carousel.querySelector("ul");
let listElems = list.querySelectorAll("li");
let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  console.log(position);
  list.style.transform = `translateX(${position}px)`;
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;

  position = Math.max(position, -width * (listElems.length - count));
  console.log(position);
  list.style.transform = `translateX(${position}px)`;
};
