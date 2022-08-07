"use strict";
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
console.log(
  speak(), // глобальный объект (нестрогий режим)
);

let eat = Animal.eat;
console.log(
  eat(), // глобальный объект (нестрогий режим)
);
