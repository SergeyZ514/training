/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
  let box = anchor.getBoundingClientRect();
  let positions = {
    "top-out": [box.left, box.top - elem.offsetHeight],
    "right-out": [box.right, box.top],
    "bottom-out": [box.left, box.bottom],
    "top-in": [box.left, box.top],
    "right-in": [box.right - elem.offsetWidth, box.top],
    "bottom-in": [box.left, box.bottom - elem.offsetHeight],
  };

  elem.style.left = positions[position][0] + "px";
  elem.style.top = positions[position][1] + "px";
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");
