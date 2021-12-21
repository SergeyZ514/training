"use strict";
/* Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм. */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  arr.forEach((word) => {
    map.set(word.split("").sort().join("").toLowerCase(), word);
  });
  console.log(map);
  return Array.from(map.values());
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
