function occurrence(str) {
  let obj = {};
  for (i of str) {
    obj.hasOwnProperty(i) ? obj[i]++ : (obj[i] = 1);
  }
  return obj;
}

console.log(occurrence("malayalam"));
