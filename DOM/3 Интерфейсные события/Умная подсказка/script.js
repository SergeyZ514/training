"use strict";

let elem = document.querySelector("#elem");

class HoverIntent {
  constructor(options) {
    let elem = options.elem,
      over = options.over,
      out = options.out,
      timerId,
      hint = null;

    elem.addEventListener("mouseenter", function (event) {
      timerId = setTimeout(function () {
        over.call(elem);
        hint = true;
      }, 600);
    });

    elem.addEventListener("mouseleave", function (event) {
      clearTimeout(timerId);
      if (hint) {
        out();
        hint = null;
      }
    });
  }
}

// образец подсказки
var tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.innerHTML = "Подсказка";

// при "наведении на элемент" показать подсказку
new HoverIntent({
  elem: elem,
  over: function () {
    tooltip.style.left = this.getBoundingClientRect().left + "px";
    tooltip.style.top = this.getBoundingClientRect().bottom + 5 + "px";
    document.body.appendChild(tooltip);
  },
  out: function () {
    document.body.removeChild(tooltip);
  },
});
