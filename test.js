"use strict";

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete

// visitedSet сейчас содержит двух пользователей

// john = null;
console.log(visitedSet);
