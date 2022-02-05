"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

function isRead(array, obj) {
  let readMessages = new WeakSet();

  for (let message of array) {
    readMessages.add(message);
  }

  if (readMessages.has(obj)) {
    return "Unread";
  }

  return "Read";
}

console.log(isRead(messages, messages[0]));
