"use strict";
let user = {
  name: "John",
};

let admin = user;

user = null;

console.log(admin);
