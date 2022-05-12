"use strict";

let tree = document.querySelector("#tree");

for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener("click", function (event) {
  if (!event.target.tagName === "SPAN") {
    return;
  }

  let parent = event.target.parentNode.querySelector("ul");

  if (!parent) {
    return;
  }
  parent.hidden = !parent.hidden;
});
