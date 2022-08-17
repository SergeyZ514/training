"use strict";

async function makeRequest() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1");
}

makeRequest();
