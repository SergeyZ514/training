"use strict";

function f() {
  console.log(this); // null
}

let user = {
  g: f(null),
};

user.g();
