"use strict";

/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.*/

// ======================================================================

function sumToCycle(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToCycle(1));
console.log(sumToCycle(2));
console.log(sumToCycle(3));
console.log(sumToCycle(4));
console.log(sumToCycle(100));

// ======================================================================

function sumToRec(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRec(n - 1);
  }
}

console.log(sumToRec(1));
console.log(sumToRec(2));
console.log(sumToRec(3));
console.log(sumToRec(4));
console.log(sumToRec(100));

// ======================================================================

function sumToAr(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToAr(1));
console.log(sumToAr(2));
console.log(sumToAr(3));
console.log(sumToAr(4));
console.log(sumToAr(100));
