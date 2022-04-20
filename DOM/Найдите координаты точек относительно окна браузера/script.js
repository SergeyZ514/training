"use strict";

let field = document.querySelector("#field");

document.onclick = function (e) {
  // показывает координаты точки клика
  // eslint-disable-next-line no-undef
  coords.innerHTML = e.clientX + ":" + e.clientY;
};

function fourCoords(elem) {
  let coordinates = elem.getBoundingClientRect();

  let triangles = {
    triangle1: [coordinates.left, coordinates.top],
    triangle2: [coordinates.right, coordinates.bottom],
    triangle3: [
      coordinates.left + elem.clientLeft,
      coordinates.top + elem.clientTop,
    ],git
    triangle4: [
      coordinates.right - elem.clientLeft,
      coordinates.bottom - elem.clientTop,
    ],
  };

  let div = document.createElement("div");
  div.style.cssText = "border: 2px solid black";

  let info = document.createElement("ul");
  let i = 1;
  for (let triangle of Object.values(triangles)) {
    info.insertAdjacentHTML(
      "beforeend",
      `<li>Координаты треугольника ${i} - X:${triangle[0]} Y:${triangle[1]}</li>`,
    );
    i++;
  }

  div.insertAdjacentElement("afterbegin", info);
  document.body.insertAdjacentElement("beforeend", div);
}

fourCoords(field);
