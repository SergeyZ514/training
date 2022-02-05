"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

function dateOfRead(arr, obj) {
  let weakMessages = new WeakMap();
  for (let message of arr) {
    weakMessages.set(message, new Date(2017, 1, 1));
  }
  return weakMessages.get(obj);
}

console.log(dateOfRead(messages, messages[2]));
