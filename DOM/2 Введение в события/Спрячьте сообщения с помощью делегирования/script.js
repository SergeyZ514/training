document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let container = document.querySelector("#container");

  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-button")) {
      let pane = event.target.closest(".pane");
      pane.hidden = "true";
    }
    return;
  });
});
