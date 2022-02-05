"use strict";

/* function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
} */

let army = makeArmy();

army[0]();
army[5]();

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let tmp = i;
    let shooter = function () {
      console.log(tmp);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}
