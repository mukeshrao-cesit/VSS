// creating array
var arr = [1, 2, 3, 4, 5];

// add elem to the array
arr.push(6);
// update the elem in array
arr[1] = 0;
// remove elem in the array based on index
delete arr[2];
// iterate all the elem in the array
for (let i in arr) {
  console.log(arr[i]);
}

//creating object
var obj = { name: "mukesh", age: "22" };

// add elem in the object
obj.gender = "male";
// update the obj elem
obj.age = "20";
//delete an elem in the object
delete obj.name;

// iterate object using loop
for (let i in obj) {
  console.log(i, obj[i]);
}
console.log(obj);
