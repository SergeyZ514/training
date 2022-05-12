let largeImg = document.querySelector("#largeImg");

document.querySelector("#thumbs").addEventListener("click", function (e) {
  let thumbnail = e.target.closest("a");

  if (!thumbnail) {
    return;
  }

  e.preventDefault();
  largeImg.src = thumbnail.href;
  largeImg.alt = thumbnail.title;
});
