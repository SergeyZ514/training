"use strict";

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2]),
);

console.log(doublePrices.meat); // 8
