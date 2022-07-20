let form = document.forms.calculator;
let diagram = document.querySelector("#diagram");

function money() {
  let moneyBefore = diagram.querySelector("#money-before");
  let moneyAfter = diagram.querySelector("#money-after");

  let initial = (moneyBefore.innerHTML = form.money.value);
  let interest = form.interest.value / 100;
  let years = form.months.value / 12;

  let result = (moneyAfter.innerHTML = Math.round(
    initial * (1 + interest) ** years,
  ));

  let greenColumn = diagram.querySelector("#height-after");
  greenColumn.style.height = (100 * result) / initial + "px";

  return;
}

form.addEventListener("change", money);

money();
