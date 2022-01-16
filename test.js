let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

  if (start + 100 < Date.now()) console.log(times);
  // показываем задержку через 100 мс
  else setTimeout(run); // если нужно ещё запланировать
});
