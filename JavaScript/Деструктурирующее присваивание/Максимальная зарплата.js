let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(object) {
  let max = 0;
  let maxName = null;

  for (let [key, value] of Object.entries(object)) {
    if (value > max) {
      max = value;
      maxName = key;
    }
  }

  return maxName;
}

console.log(topSalaries(salaries));
