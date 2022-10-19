const arr = [1, 2, 45, 3, 88, 29, 1, 2];

// two ways to find the largest num in the array
// First Way
arr.sort();
console.log(arr[arr.length - 1]);

//Second Way
var maxVal = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxVal = arr[i];
  }
}
console.log(maxVal);
