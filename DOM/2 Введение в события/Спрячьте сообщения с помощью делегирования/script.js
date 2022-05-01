document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let container = document.querySelector("#container");

  container.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.classList.contains("remove-button")) {
      event.target.parentElement.hidden = "true";
    }
  });
});
``;
