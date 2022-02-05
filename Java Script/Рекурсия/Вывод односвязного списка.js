"use strict";

/* Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию. */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListRec(list) {
  console.log(list.value);

  if (list.next) {
    printListRec(list.next);
  }
}

printListRec(list);

// ==================================================

function printListCycle(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printListCycle(list);
