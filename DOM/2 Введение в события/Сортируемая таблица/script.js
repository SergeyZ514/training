let table = document.querySelector("#grid");

table.addEventListener("click", function (event) {
  if (event.target.tagName !== "TH") {
    return;
  }

  let th = event.target;
  console.log(th.dataset.type);
  sortGrid(th.cellIndex, th.dataset.type);
});

function sortGrid(colNum, type) {
  let tbody = table.querySelector("tbody");

  let rowsArray = Array.from(tbody.rows);

  // compare(a, b) сравнивает две строки, нужен для сортировки
  let compare;

  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }

  // сортировка
  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
