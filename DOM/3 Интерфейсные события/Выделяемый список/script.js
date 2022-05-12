let ul = document.querySelector("#ul");

ul.addEventListener("mousedown", function (event) {
  if (event.target.tagName != "LI") {
    return;
  }
  event.preventDefault();

  if (event.ctrlKey || event.metaKey) {
    event.target.closest("li").classList.toggle("selected");
  } else {
    for (let li of ul.querySelectorAll("li")) {
      if (li.classList.contains("selected")) {
        li.classList.remove("selected");
      }
      event.target.closest("li").classList.add("selected");
    }
  }
});
