const arr = [2, 4, 5, 3, 6, 4];

const newArr = arr.map((elem) => (elem % 2 === 0 ? elem * 2 : elem));

console.log(newArr);
