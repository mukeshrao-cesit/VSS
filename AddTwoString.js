var addStrings = function (num1, num2) {
  if (num1.length > num2.length) {
    return numfunc(num1, num2);
  } else {
    return numfunc(num2, num1);
  }
};

function numfunc(num1, num2) {
  if (num1.length === 1 && num2.length === 1) {
    return +num1 + +num2 + "";
  }
  let result = "";
  let count = 0;
  let x = num2.length - 1;
  let extra = false;
  for (let i = num1.length - 1; i >= 0; i--) {
    if (x >= 0) {
      for (let j = x; j >= 0; j--) {
        count = +num1[i] + +num2[j] + count;
        if (count > 9) {
          count = count % 10;
          extra = true;
        }
        result = count + result;
        x--;
        if (extra) {
          count = 1;
          extra = false;
        } else {
          count = 0;
        }
        break;
      }
    } else {
      count = +num1[i] + 0 + count;
      result = count + result;
      count = 0;
    }
  }
  return result;
}

console.log(addStrings("1273", "1231"));
