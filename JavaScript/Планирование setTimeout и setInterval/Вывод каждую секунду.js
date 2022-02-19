"use strict";

function printNumbersInterval(from, to) {
  let current = from;

  function run() {
    console.log(current);

    if (current == to) {
      console.log("Timer stop");
      clearInterval(timer);
    }
    current++;
  }

  run();
  let timer = setInterval(run, 400);
}

printNumbersInterval(1, 5);

/* function printNumbersTimeout(from, to) {
  let current = from;

  function run() {
    console.log(current);
    if (current < to) {
      setTimeout(run, 500);
    }
    current++;
  }

  run();
}

printNumbersTimeout(5, 10); */
