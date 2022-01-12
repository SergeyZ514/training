function makeCounter() {
  // вместо
  // let count = 0

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
