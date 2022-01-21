function hash() {
  console.log([].join.call(arguments)); // 1,2
}

hash(1, 2);
