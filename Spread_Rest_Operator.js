function solve() {
  var obj = { name: "mukesh", gender: "male", city: "Chennai" };

  //Destructuring
  const { name: x = "NO" } = obj;
  console.log(x);

  //Rest Operator
  const { name, ...restObj } = obj;
  console.log(name, restObj);

  //Spread Operator - shallow copy
  const newObj = { ...obj };
  obj.name = "Ram";
  console.log(obj, newObj);
}
solve();
