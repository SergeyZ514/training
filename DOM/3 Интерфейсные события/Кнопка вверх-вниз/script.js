let arrowTop = document.querySelector("#arrowTop");

arrowTop.onclick = function () {
  window.scrollTo(scrollX, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener("scroll", function () {
  arrowTop.hidden = scrollY < document.documentElement.clientHeight;
});
