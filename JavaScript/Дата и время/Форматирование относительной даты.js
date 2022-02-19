"use strict";

/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */

function formatDate(date) {
  let diff = new Date() - date;
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(diff / 60000);

  if (diff < 1000) {
    return `Прямо сейчас`;
  } else if (min < 1) {
    return `${sec} сек. назад`;
  } else if (min < 60) {
    return `${min} мин. назад`;
  } else {
    let d = date;

    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes(),
    ].map((item) => item.slice(-2));

    return `${d[0]}.${d[1]}.${d[2]} ${d[3]}:${d[4]}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
