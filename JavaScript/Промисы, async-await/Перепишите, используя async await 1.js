"use strict";

async function loadJson(url) {
  let request = await fetch(url);

  if (request.status == 200) {
    let json = await request.json();
    return json;
  }

  throw new Error(request.status);
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // Error: 404
