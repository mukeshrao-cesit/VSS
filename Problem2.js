const input = "AAAABBBCCDAABB";

function solve() {
  // create an function
  let str = ""; // create an empty string for final output
  let elem = input[0]; // create an elem with initial char of the given string
  let count = 0; // create a counter variable to count the occurrence of the char
  for (let i of input) {
    // create an for loop for iteration the string into characters
    if (elem === i) {
      // check whether the elem is equal to the iterating char
      count++; // if true, increment count
    } else {
      // if false, add the char and it's occurence into the final string
      str += elem + count;
      elem = i; // then, initial the elem with the current char
      count = 1; // and initialize the count variable to one
    }
  }
  str += elem + count; // this will add the final char and it's occurrence
  console.log(str); // then log the final string
}

solve();
