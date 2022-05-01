"use strict";

let ul = document.createElement("ul");
ul.innerHTML = "<h1>Созданный список</h1>";
document.body.append(ul);

// eslint-disable-next-line no-constant-condition
while (true) {
  let data = prompt("Введите данные для списка");

  if (!data) {
    break;
  }
  let li = document.createElement("li");
  li.innerHTML = `<h3>${data}</h3>`;
  ul.append(li);
}
