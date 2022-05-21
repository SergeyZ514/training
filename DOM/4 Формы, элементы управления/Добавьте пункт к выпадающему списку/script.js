let select = document.querySelector("#genres");

let option = new Option("Классика", "classic", true, true);
select.insertAdjacentElement("beforeend", option);

console.log(
  `Значение выбранного пункта  - ${select.options[select.selectedIndex].value}
  Текст выбранного пункта - ${select.options[select.selectedIndex].text}`,
);
