function occurrence(str) {
  let obj = {};
  for (i of str) {
    obj.hasOwnProperty(i) ? obj[i]++ : (obj[i] = 1);
  }
  return obj;
}

function occurrence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str.charAt(i))) {
      obj[str.charAt(i)]++;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

function occurrence(str) {
  let obj = {};
  for (let i in str) {
    if (obj.hasOwnProperty(str.charAt(i))) {
      obj[str.charAt(i)]++;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

console.log(occurrence("malayalam"));
