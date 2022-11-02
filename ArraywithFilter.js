var str = "Hello my name is Ankit Jain & i'm from Morena";

var array = str.split(" ");

function longestStringV1(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (result.length < array[i].length) {
      result = array[i];
    }
  }
  return result;
}

function longestStringV2(array) {
  let result = "";
  for (let i in array) {
    result.length < array[i].length ? (result = array[i]) : undefined;
  }
  return result;
}

const longestStringV3 = array.reduce(
  (initialValue, iteratingValue) =>
    iteratingValue.length > initialValue.length
      ? (initialValue = iteratingValue)
      : initialValue,
  ""
);

console.log(longestStringV1(array));
console.log(longestStringV2(array));
console.log(longestStringV3);
