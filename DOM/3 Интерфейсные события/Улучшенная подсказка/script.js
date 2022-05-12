let tooltipElem;

document.addEventListener("mouseover", function (event) {
  let target = event.target.closest("[data-tooltip]");
  if (!target) return;

  tooltipElem = showTooltip(target, target.dataset.tooltip);
});

document.addEventListener("mouseout", function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
});

function showTooltip(element, html) {
  tooltipElem = document.createElement("div");
  tooltipElem.classList.add("tooltip");
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  let coords = element.getBoundingClientRect();

  let left = coords.left + (element.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + element.offsetHeight + 5;
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";

  return tooltipElem;
}
