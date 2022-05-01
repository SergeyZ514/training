document.querySelector("#hider").addEventListener("click", () => {
  let text = document.querySelector("#text");
  if (text.style.visibility === "") {
    text.style.visibility = "hidden";
  } else {
    text.style.visibility = "";
  }
});
