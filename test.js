"use strict";

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

let object1 = JSON.stringify(meetup, function replacer(key, value) {
  return key == "occupiedBy" ? undefined : value;
});

console.log(object1);
object1 = object1.toString();
console.log(object1);
