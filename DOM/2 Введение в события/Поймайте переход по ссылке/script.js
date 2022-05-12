let contents = document.getElementById("contents");

contents.addEventListener("click", function (event) {
  let target = event.target.closest("a");

  function handeLink(href) {
    let isLeaving = confirm(`Перейти на ${href}?`);
    if (!isLeaving) {
      event.preventDefault();
    }
  }

  if (target && contents.contains(target)) {
    return handeLink(target.getAttribute("href"));
  }
});
