let animal = {
  eat() {
    console.log("Eat");
  },
};

let rabbit = {
  __proto__: animal,
  eat: function () {
    super.eat();
  },
};

rabbit.eat();
