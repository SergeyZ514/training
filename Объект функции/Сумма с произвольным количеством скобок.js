"use strict";

function sum(a) {
  let current = (b) => sum(a + b);

  current.toString = () => a;

  return current;
}

console.log(sum(1)(2));
console.log(sum(1)(2)(3));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));
