function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

/* loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    alert(_); // функция, объявленная в загруженном скрипте
  },
); */

loadScript("/my/script.js", function (script) {
  alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

  loadScript("/my/script2.js", function (script) {
    alert(`Здорово, второй скрипт загрузился`);
  });
});
