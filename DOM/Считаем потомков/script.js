for (let li of document.querySelectorAll("li")) {
  let title = li.firstChild.data.trim();

  let count = li.getElementsByTagName("li").length;
  if (count === 0) {
    continue;
  }

  alert(title + ": " + count);
}
