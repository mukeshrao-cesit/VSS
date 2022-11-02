let employees = [
  {
    id: 11,
    name: "Abhinav",
    salary: 75000,
  },
  {
    id: 2131,
    name: "Raj",
    salary: 62000,
  },
  {
    id: 3012,
    name: "Raj",
    salary: 32000,
  },
];

function solve(array) {
  let result = [];
  for (let i in array) {
    array[i].salary > 60000 ? result.push(array[i]) : undefined;
  }
  return result;
}

console.log(solve(employees));

function result(array) {
  let resultArray = array.filter((item) => item.salary > 60000);
  return resultArray;
}

console.log(result(employees));
