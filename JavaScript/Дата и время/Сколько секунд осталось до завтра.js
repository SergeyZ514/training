"use strict";

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let now = new Date();
  let nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return `До следующего дня осталось ${Math.round(
    (nextDay.getTime() - now.getTime()) / 1000,
  )} секунд`;
}

console.log(getSecondsToTomorrow());
