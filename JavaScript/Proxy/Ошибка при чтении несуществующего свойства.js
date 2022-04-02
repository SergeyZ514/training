"use strict";

let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, property, receiver) {
      if (property in target) {
        return Reflect.get(target, property, receiver);
      } else {
        throw new ReferenceError(`Ошибка: свойства ${property} не существует`);
      }
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
