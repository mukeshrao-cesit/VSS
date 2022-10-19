let array = undefined;

if (Array.isArray(array)) {
  console.log("It's an array");
} else if (array === null) {
  console.log("It's an null");
} else {
  console.log("It's an " + typeof array);
}
