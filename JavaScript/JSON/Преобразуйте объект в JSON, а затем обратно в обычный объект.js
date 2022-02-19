"use strict";

let user = {
  name: "Василий Иванович",
  age: 35,
};

let userJson = JSON.stringify(user);
console.log(userJson);

let userObj = JSON.parse(userJson);
console.log(userObj);
