"use strict";

/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня. */

function getSecondsToday() {
  let now = Math.floor(new Date().getTime() / 1000);
  let day = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);

  return `Сегодня прошло секунд ${now - day}`;
}

console.log(getSecondsToday());
