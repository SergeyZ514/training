"use strict";

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, index, receiver) {
    if (index < 0) {
      index = +index + target.length;
    }
    return Reflect.get(target, index, receiver);
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
