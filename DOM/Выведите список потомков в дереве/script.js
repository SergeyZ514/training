"use strict";
let lis = document.querySelectorAll("li");

for (let li of lis) {
  let lisCount = li.getElementsByTagName("li").length;

  if (!lisCount) {
    continue;
  }

  li.firstChild.data += ` [${lisCount}]`;
}
