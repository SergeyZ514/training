"use strict";

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let container = document.querySelector("#container");

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement("ul");

  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

createTree(container, data);
